import React, { useContext, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoBagCheckOutline } from "react-icons/io5";

import { MyContext } from '../../App';
import { fetchDataFromApi, postData } from '../../utils/api';

import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const [formFields, setFormFields] = useState({
        fullName: "",
        country: "VietNam",
        streetAddressLine1: "",
        streetAddressLine2: "",
        city: "",
        state: "",
        zipCode: "",
        phoneNumber: "",
        email: ""
    })

    const [cartData, setCartData] = useState([]);
    const [totalAmount, setTotalAmount] = useState();

    useEffect(() => {
        window.scrollTo(0, 0)
        const user = JSON.parse(localStorage.getItem("user"));
        fetchDataFromApi(`/api/cart?userId=${user?.userId}`).then((res) => {
            setCartData(res);

            setTotalAmount(res.length !== 0 &&
                res.map(item => parseInt(item.price) * item.quantity).reduce((total, value) => total + value, 0))


        })

    }, []);

    const onChangeInput = (e) => {
        setFormFields(() => ({
            ...formFields,
            [e.target.name]: e.target.value
        }))
    }

    const context = useContext(MyContext);
    const history = useNavigate();

    const checkout = (e) => {

        e.preventDefault();


        console.log(cartData)

        console.log(formFields)
        if (formFields.fullName === "") {
            context.setAlertBox({
                open: true,
                error: true,
                msg: "Please fill full name "
            })
            return false
        }

        // if (formFields.country === "") {
        //     context.setAlertBox({
        //         open: true,
        //         error: true,
        //         msg: "Please fill country "
        //     })
        //     return false
        // }

        if (formFields.streetAddressLine1 === "") {
            context.setAlertBox({
                open: true,
                error: true,
                msg: "Please fill Street address"
            })
            return false
        }

        // if (formFields.streetAddressLine2 === "") {
        //     context.setAlertBox({
        //         open: true,
        //         error: true,
        //         msg: "Please fill  Street address"
        //     })
        //     return false
        // }

        if (formFields.city === "") {
            context.setAlertBox({
                open: true,
                error: true,
                msg: "Please fill city "
            })
            return false
        }

        if (formFields.district === "") {
            context.setAlertBox({
                open: true,
                error: true,
                msg: "Please fill district"
            })
            return false
        }

        if (formFields.zipCode === "") {
            context.setAlertBox({
                open: true,
                error: true,
                msg: "Please fill zipCode "
            })
            return false
        }

        const regex = /^\d+$/;
        if (!regex.test(formFields.zipCode)) {
            context.setAlertBox({
                open: true,
                error: true,
                msg: "Please only enter digit"
            })
            return false
        }

        if (formFields.phoneNumber === "") {
            context.setAlertBox({
                open: true,
                error: true,
                msg: "Please fill phone Number "
            })
            return false
        }

        if (!regex.test(formFields.phoneNumber)) {
            context.setAlertBox({
                open: true,
                error: true,
                msg: "Please only enter digit"
            })
            return false
        }

        if (formFields.phoneNumber.length !== 10) {
            context.setAlertBox({
                open: true,
                error: true,
                msg: "Length of phone number must equal 10"
            })
            return false
        }

        if (formFields.email === "") {
            context.setAlertBox({
                open: true,
                error: true,
                msg: "Please fill email"
            })
            return false
        }

        const regexe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regexe.test(formFields.email)) {
            context.setAlertBox({
                open: true,
                error: true,
                msg: "Please enter the correct email format (including @) !"
            })
            return false
        }


        const addressInfo = {
            name: formFields.fullName,
            phoneNumber: formFields.phoneNumber,
            address: formFields.streetAddressLine1 + ", " +  formFields.streetAddressLine2 + ", " + formFields.district + ", " + formFields.city,
            pincode: formFields.zipCode,
            date: new Date().toLocaleString(
                "en-US",
                {
                    timeZone: "Asia/Ho_Chi_Minh",
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }
            )
        }

        const paymentId = "COD" + Date.now();

        const user = JSON.parse(localStorage.getItem("user"));

        const payLoad = {
            name: addressInfo.name,
            phoneNumber: formFields.phoneNumber,
            address: addressInfo.address,
            pincode: addressInfo.pincode,
            amount: parseInt(totalAmount),
            paymentId: paymentId,
            email: user.email,
            userid: user.userId,
            products: cartData
        }

        // console.log(payLoad)


        postData(`/api/orders/create`, payLoad).then(res => {
            history("/orders");
        })
    }

return (
    <section className='section'>
        <div className='container'>
            <form className='checkoutForm' onSubmit={checkout}>
                <div className='row'>
                    <div className='col-md-8'>
                        <h2 className='hd'>THÔNG TIN ĐẶT HÀNG</h2>

                        <div className='row mt-3'>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <TextField label="Họ tên *" variant="outlined" className='w-100' size="small" name="fullName" onChange={onChangeInput} />
                                </div>
                            </div>

                            {/* <div className='col-md-6'>
                                <div className='form-group'>
                                    <TextField label="Country *" variant="outlined" className='w-100' size="small" name="country" onChange={onChangeInput} />
                                </div>
                            </div> */}


                        </div>


                        <h6>Địa chỉ *</h6>

                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <TextField label="Số nhà và tên đường" variant="outlined" className='w-100' size="small" name="streetAddressLine1" onChange={onChangeInput} />
                                </div>

                                <div className='form-group'>
                                    <TextField label="Ghi chú thêm..." variant="outlined" className='w-100' size="small" name="streetAddressLine2" onChange={onChangeInput} />
                                </div>

                            </div>
                        </div>

                        <h6>Quận/Huyện *</h6>

                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <TextField label="" variant="outlined" className='w-100' size="small" name="district" onChange={onChangeInput} />
                                </div>

                            </div>
                        </div>

                        <h6>Tỉnh/Thành phố *</h6>

                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <TextField label="" variant="outlined" className='w-100' size="small" name="city" onChange={onChangeInput} />
                                </div>

                            </div>
                        </div>

                        


                        <h6>Mã bưu điện *</h6>

                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='form-group'>
                                    <TextField label="" variant="outlined" className='w-100' size="small" name="zipCode" onChange={onChangeInput} />
                                </div>

                            </div>
                        </div>


                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <TextField label="Số điện thoại" variant="outlined" className='w-100' size="small" name="phoneNumber" onChange={onChangeInput} />
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <TextField label="Email" variant="outlined" className='w-100' size="small" name="email" onChange={onChangeInput} />
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className='col-md-4'>
                        <div className='card orderInfo'>
                            <h4 className='hd'>ĐƠN HÀNG</h4>
                            <div className='table-responsive mt-3'>
                                <table className='table table-borderless'>
                                    <thead>
                                        <tr>
                                            <th>Sản phẩm</th>
                                            <th>Thành tiền</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            cartData?.length !== 0 && cartData?.map((item, index) => {
                                                return (
                                                    <tr>
                                                        <td>{item?.productTitle?.substr(0, 20) + '...'}  <b>× {item?.quantity}</b></td>

                                                        <td>

                                                            {
                                                                item?.subTotal?.toLocaleString('en-US', { style: 'currency', currency: 'VND' })
                                                            }

                                                        </td>
                                                    </tr>

                                                )
                                            })
                                        }



                                        <tr>
                                            <td>Tổng tiền </td>

                                            <td>

                                                {
                                                    (cartData?.length !== 0 ?
                                                        cartData?.map(item => parseInt(item.price) * item.quantity).reduce((total, value) => total + value, 0) : 0)?.toLocaleString('en-US', { style: 'currency', currency: 'VND' })
                                                }


                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>

                            <Button type="submit" className='btn-blue bg-red btn-lg btn-big'
                            ><IoBagCheckOutline /> &nbsp; Đặt hàng</Button>

                        </div>
                    </div>


                </div>
            </form>
        </div>
    </section>
)
}

export default Checkout;