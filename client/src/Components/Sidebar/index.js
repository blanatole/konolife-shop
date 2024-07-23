import React, { useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { MyContext } from '../../App';

const Sidebar = (props) => {
    const [value, setValue] = useState([100000, 1000000]);
    const [value2, setValue2] = useState(0);

    const [subCatId, setSubCatId] = useState('');

    const [filterSubCat, setfilterSubCat] = React.useState();
    const [isOpenFilter, setIsOpenFilter] = useState(false);
   


    const context = useContext(MyContext);

    const { id } = useParams();

    useEffect(() => {
        setSubCatId(id);
    }, [id])
    

    useEffect(() => {
        setIsOpenFilter(props.isOpenFilter)
    }, [props.isOpenFilter])


    const handleChange = (event) => {
        setfilterSubCat(event.target.value);
        props.filterData(event.target.value)
        setSubCatId(event.target.value)
    };

    useEffect(() => {
        props.filterByPrice(value, subCatId);
    }, [value,id]);

    const filterByRating = (rating) => {
        props.filterByRating(rating, subCatId);
    }

    return (
        <>
            <div className={`sidebar ${isOpenFilter===true && 'open'}`}>
                <div className="filterBox">
                    <h6>DANH MỤC</h6>

                    <div className='scroll'>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={filterSubCat}
                            onChange={handleChange}
                        >

                      
                            {
                                context?.subCategoryData?.length !== 0 &&  context?.subCategoryData?.map((item, index) => {

                                    return (
                                        <FormControlLabel value={item?.id} control={<Radio />} label={item?.name} />

                                    )
                                })
                            }
                        </RadioGroup>

                    </div>
                </div>


                <div className="filterBox">
                    <h6>GIÁ BÁN</h6>

                    <RangeSlider value={value} onInput={setValue} min={100000} max={1000000} step={100000} />


                    <div className='d-flex pt-2 pb-2 priceRange'>
                        <span>From: <strong className='text-dark'>{value[0].toLocaleString()} đ</strong></span>
                        <span className='ml-auto'>to: <strong className='text-dark'>{value[1].toLocaleString()} đ</strong></span>
                    </div>
                </div>


                <div className="filterBox">
                    <h6>ĐÁNH GIÁ</h6>

                    <div className='scroll pl-0'>
                        {
                            // <ul>
                            //     <li>
                            //         <FormControlLabel className='w-100' control={<Checkbox />} label="Frito Lay" />
                            //     </li>

                            //     <li>
                            //         <FormControlLabel className='w-100' control={<Checkbox />} label="Nespresso" />
                            //     </li>
                            //     <li>
                            //         <FormControlLabel className='w-100' control={<Checkbox />} label="Frito Lay" />
                            //     </li>

                            //     <li>
                            //         <FormControlLabel className='w-100' control={<Checkbox />} label="Nespresso" />
                            //     </li>
                            //     <li>
                            //         <FormControlLabel className='w-100' control={<Checkbox />} label="Frito Lay" />
                            //     </li>

                            //     <li>
                            //         <FormControlLabel className='w-100' control={<Checkbox />} label="Nespresso" />
                            //     </li>
                            // </ul>
                        }
                        <ul>
                            <li onClick={() => filterByRating(5)} className='cursor' >
                                <Rating name="read-only" value={5} readOnly size="small"
                                />
                            </li>
                            <li onClick={() => filterByRating(4)} className='cursor'>
                                <Rating name="read-only" value={4} readOnly size="small"
                                />
                            </li>
                            <li onClick={() => filterByRating(3)} className='cursor'>
                                <Rating name="read-only" value={3} readOnly size="small"
                                />
                            </li>
                            <li onClick={() => filterByRating(2)} className='cursor'>
                                <Rating name="read-only" value={2} readOnly size="small"
                                />
                            </li>
                            <li onClick={() => filterByRating(1)} className='cursor'>
                                <Rating name="read-only" value={1} readOnly size="small"
                                />
                            </li>
                        </ul>


                    </div>
                </div>


                <br />

                {/* <Link to="#"><img src='https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif' className='w-100' /></Link> */}

            </div>
        </>
    )
}

export default Sidebar;