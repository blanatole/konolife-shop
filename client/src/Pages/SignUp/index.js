import { useContext, useEffect, useState } from "react";
import Logo from "../../assets/images/kono_logo.png";
import { MyContext } from "../../App";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import GoogleImg from "../../assets/images/googleImg.png";
import { postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../../firebase";

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formfields, setFormfields] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    isAdmin: false,
  });

  const context = useContext(MyContext);
  const history = useNavigate();

  useEffect(() => {
    context.setisHeaderFooterShow(false);
  }, []);

  const onchangeInput = (e) => {
    setFormfields(() => ({
      ...formfields,
      [e.target.name]: e.target.value,
    }));
  };

  const register = (e) => {
    console.log(formfields);
    e.preventDefault();
    try {
      if (formfields.name === "") {
        context.setAlertBox({
          open: true,
          error: true,
          msg: "name can not be blank!",
        });
        return false;
      }

      if (formfields.email === "") {
        context.setAlertBox({
          open: true,
          error: true,
          msg: "email can not be blank!",
        });
        return false;
      }

      const regexe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!regexe.test(formfields.email)) {
        context.setAlertBox({
          open: true,
          error: true,
          msg: "Please enter the correct email format!"
        })
        return false;
      }

      if (formfields.phone === "") {
        context.setAlertBox({
          open: true,
          error: true,
          msg: "phone can not be blank!",
        });
        return false;
      }

      const regex = /^\d+$/;
      if (!regex.test(formfields.phone)) {
        context.setAlertBox({
          open: true,
          error: true,
          msg: "phone numbers containing only digits!"
        })
        return false;
      }

      if (formfields.phone.length != 10) {
        context.setAlertBox({
          open: true,
          error: true,
          msg: "Please enter 10 characters of your phone number!"
        })
        return false;
      }


      if (formfields.password === "") {
        context.setAlertBox({
          open: true,
          error: true,
          msg: "password can not be blank!",
        });
        return false;
      }

      const regex2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}$/;
      if (!regex2.test(formfields.password)) {
        context.setAlertBox({
          open: true,
          error: true,
          msg: "Passwords must be longer than 6 characters, including numbers, lowercase letters and uppercase letters!"
        })
        return false;
      }

      setIsLoading(true);

      postData("/api/user/signup", formfields)
        .then((res) => {
          if (res.error !== true) {
            context.setAlertBox({
              open: true,
              error: false,
              msg: "Đăng ký thành công!",
            });

            setTimeout(() => {
              setIsLoading(true);
              history("/signIn");
              //window.location.href="/signIn";
            }, 2000);
          } else {
            setIsLoading(false);
            context.setAlertBox({
              open: true,
              error: true,
              msg: res.msg,
            });
          }
        })
        .catch((error) => {
          setIsLoading(false);
          console.error("Error posting data:", error);
          // Handle error (e.g., show an error message)
        });
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        const fields = {
          name: user.providerData[0].displayName,
          email: user.providerData[0].email,
          password: null,
          images: user.providerData[0].photoURL,
          phone: user.providerData[0].phoneNumber
        };

        postData("/api/user/authWithGoogle", fields).then((res) => {
          try {
            if (res.error !== true) {
              localStorage.setItem("token", res.token);

              const user = {
                name: res.user?.name,
                email: res.user?.email,
                userId: res.user?.id,
              };

              localStorage.setItem("user", JSON.stringify(user));

              context.setAlertBox({
                open: true,
                error: false,
                msg: res.msg,
              });

              setTimeout(() => {
                history("/");
                context.setIsLogin(true);
                setIsLoading(false);
                context.setisHeaderFooterShow(true);
              }, 2000);
            } else {
              context.setAlertBox({
                open: true,
                error: true,
                msg: res.msg,
              });
              setIsLoading(false);
            }
          } catch (error) {
            console.log(error);
            setIsLoading(false);
          }
        });

        context.setAlertBox({
          open: true,
          error: false,
          msg: "User authentication Successfully!",
        });

        // window.location.href = "/";
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        context.setAlertBox({
          open: true,
          error: true,
          msg: errorMessage,
        });
        // ...
      });
  };

  return (
    <section className="section signInPage signUpPage">
      <div className="shape-bottom">
        {" "}
        <svg
          fill="#fff"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 1921 819.8"
          style={{ enableBackground: "new 0 0 1921 819.8" }}
        >
          {" "}
          <path
            class="st0"
            d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"
          ></path>{" "}
        </svg>
      </div>

      <div className="container">
        <div className="box card p-3 shadow border-0">
          <div className="text-center">
            <img style={{ width: 180 }} src={Logo} />
          </div>

          <form className="mt-2" onSubmit={register}>
            <h2 className="mb-3">Đăng ký</h2>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <TextField
                    label="Tên"
                    name="name"
                    onChange={onchangeInput}
                    type="text"
                    variant="standard"
                    className="w-100"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <TextField
                    label="Số điện thoại"
                    name="phone"
                    onChange={onchangeInput}
                    type="text"
                    variant="standard"
                    className="w-100"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Email"
                type="email"
                name="email"
                onChange={onchangeInput}
                variant="standard"
                className="w-100"
              />
            </div>
            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Mật khẩu"
                name="password"
                onChange={onchangeInput}
                type="password"
                variant="standard"
                className="w-100"
              />
            </div>


            <div className="d-flex align-items-center mt-3 mb-3 ">
              <div className="row w-100">
                <div className="col-md-6">
                  <Button
                    type="submit"
                    disabled={isLoading === true ? true : false}
                    className="btn-blue w-100 btn-lg btn-big"
                  >
                    {isLoading === true ? <CircularProgress /> : "Đăng ký"}
                  </Button>
                </div>
                <div className="col-md-6 pr-0">
                  <Link to="/" className="d-block w-100">
                    {" "}
                    <Button
                      className="btn-lg btn-big w-100"
                      variant="outlined"
                      onClick={() => context.setisHeaderFooterShow(true)}
                    >
                      Quay lại
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <p className="txt">
              Đã có tài khoản?{" "}
              <Link to="/signIn" className="border-effect">
                Đăng nhập
              </Link>
            </p>

            <h6 className="mt-4 text-center font-weight-bold">
              Hoặc tiếp tục với cách khác
            </h6>

            <Button
              className="loginWithGoogle mt-2"
              variant="outlined"
              onClick={signInWithGoogle}
            >
              <img src={GoogleImg} /> Đăng nhập với Google
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
