'use client'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRef, useState } from 'react'
import { useForm } from "react-hook-form"




const Registration = () => {

    const { register, handleSubmit, trigger, watch, clearErrors, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        let r = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        let res = await r.text()
        console.log(res)
    }

    var [count, setCount] = useState(1)

    const btnRef1 = useRef()
    const btnRef2 = useRef()
    const btnRef3 = useRef()

    const colorToggler = async (action) => {
        let isValid = false;

        if (action === 'next') {
            if (count === 1) {
                // Validate Step 1 fields only when trying to move to Step 2
                isValid = await trigger(["clinic_name", "reg_no"]);
                if (isValid) {
                    clearErrors(); // Clear errors before moving to Step 2
                    btnRef2.current.style.backgroundColor = '#01a0a9'; // Update Step 2 button color
                    setCount(2); // Move to Step 2
                } else {
                    alert("Please complete Step 1 fields correctly.");
                    return;
                }
            } else if (count === 2) {
                // Validate Step 2 fields only when trying to move to Step 3
                isValid = await trigger(["city", "province", "state", "postal", "address", "email", "phone"]);
                if (isValid) {
                    clearErrors(); // Clear errors before moving to Step 3
                    btnRef3.current.style.backgroundColor = '#01a0a9'; // Update Step 3 button color
                    setCount(3); // Move to Step 3
                } else {
                    alert("Please complete Step 2 fields correctly.");
                    return;
                }
            } else if (count === 3) {
                // Validate subscription plan in Step 3
                isValid = await trigger(["selected_plan","files"]);
                if (isValid) {
                    // Confirm submission
                    const userConfirmed = window.confirm(
                        "You are about to submit the form. Are you sure your credentials are correct?"
                    );
                    if (userConfirmed) {
                        handleSubmit(onSubmit)(); // Submit the form
                        setCount(4); // Move to the Thank You page
                    }
                } else {
                    alert("Subscription plan and file attachment both are mandatory.");
                    return;
                }
            }
        }

        if (action === 'previous') {
            clearErrors(); // Clear errors when going back
            if (count === 2) {
                btnRef2.current.style.backgroundColor = '#ffffff'; // Reset Step 2 button color
                setCount(1); // Move to Step 1
            } else if (count === 3) {
                btnRef3.current.style.backgroundColor = '#ffffff'; // Reset Step 3 button color
                setCount(2); // Move to Step 2
            }
        }
    };





    return (
        <div className="">
            <Header />

            {/* Registration part Body */}
            <div className="flex justify-center items-center p-5 md:p-32 bg-[#d5fffd] text-center">

                {/* The part where form components will be shown */}
                <div className="bg-white flex flex-col justify-center items-center py-10 px-2 md:p-10 rounded-2xl shadow-lg gap-10">

                    <span className="text-[#01a0a9] text-sm font-bold text-center">INSTRUCTION</span>

                    <h1 className="text-center text-4xl font-bold">Register Your Clinic</h1>

                    <p className="text-center text-lg text-[#5f5d5d] p-4 md:px-20">Briefly explain the benefits of registering on the platform, emphasizing the ability to manage all aspects of clinic operations, including remote examinations.</p>

                    {/* Progress that shows which part of form is being filled */}
                    <div className="md:p-16 md:h-[25vh]">
                        <div className="md:bg-[#d3d0d0] bg-white md:w-[50vw] md:h-1 rounded-lg flex items-center gap-5 md:justify-around">
                            <div className="text-[#d3d0d0] flex items-center justify-center flex-col md:pt-[75px] lg:pt-[70px]   gap-2">
                                <span ref={btnRef1} className="rounded-full border-2 bg-[#01a0a9]  text-sm md:text-2xl py-[6px] md:py-[7px] px-3 md:px-4 ">1</span>
                                <span className="text-sm md:text-2xl xl:px-6 2xl:px-8">Clinical Information</span>
                            </div>
                            <div className="text-[#d3d0d0] flex items-center justify-center flex-col md:pt-[75px] lg:pt-[70px]  gap-2">
                                <span ref={btnRef2} className="rounded-full border-2 bg-white  text-sm md:text-2xl py-[6px] md:py-[7px] px-3 md:px-4">2</span>
                                <span className="text-sm md:text-2xl xl:px-6 2xl:px-8">Personal Information</span>
                            </div>
                            <div className="text-[#d3d0d0] flex items-center justify-center flex-col md:pt-[75px] lg:pt-[70px]  gap-2">
                                <span ref={btnRef3} className="rounded-full border-2 bg-white  text-sm md:text-2xl py-[6px] md:py-[7px] px-3 md:px-4">3</span>
                                <span className="text-sm md:text-2xl xl:px-6 2xl:px-8">Subscription Plan</span>
                            </div>

                        </div>
                    </div>

                    {/* Form Components */}
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-[#e9f9f8] rounded-2xl flex-col gap-8">

                        {/* component1 */}
                        {count === 1 &&
                            <div className="flex w-[80vw] md:w-[60vw] border p-6 bg-[#e9f9f8] rounded-2xl flex-col gap-8">

                                {/* introduction */}
                                <h1 className="text-sm md:text-3xl text-[#01a0a9] font-bold">Clinic Information</h1>

                                {/* Clinic Full Name */}
                                <label className="flex flex-col w-full text-left">
                                    <span className="text-gray-700 font-medium mb-2">Clinic Full Name</span>
                                    <input
                                        {...register("clinic_name", { required: "Clinic Name is required" })}
                                        type="text"
                                        placeholder="Clinic Name"
                                        className={`border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${errors.clinic_name ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-[#01a0a9]"
                                            } bg-gray-50`}
                                    />
                                    {errors.clinic_name && (
                                        <span className="text-red-500 text-sm mt-1">{errors.clinic_name.message}</span>
                                    )}
                                </label>

                                {/* Registration Number */}
                                <label className="flex flex-col col-span-2 w-full text-left">
                                    <span className="text-gray-700 font-medium mb-2">Registration Number</span>
                                    <input
                                        {...register("reg_no", { required: "Registration Number is required" })}
                                        type="text"
                                        placeholder="Registration Number"
                                        className={`border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${errors.reg_no ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-[#01a0a9]"
                                            } bg-gray-50`}
                                    />
                                    {errors.reg_no && (
                                        <span className="text-red-500 text-sm mt-1">{errors.reg_no.message}</span>
                                    )}
                                </label>

                                <div className="flex md:items-center gap-8 justify-between text-left flex-col md:flex-row">

                                    {/* License Number (Optional) */}
                                    <label className="flex flex-col w-full">
                                        <span className="text-gray-700 font-medium mb-2">License Number</span>
                                        <input
                                            {...register("license_no")}
                                            type="text"
                                            placeholder="#000-558-996"
                                            className="border border-slate-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#01a0a9] bg-gray-50"
                                        />
                                    </label>

                                    {/* Date of Establishment (Optional) */}
                                    <label className="flex flex-col w-full">
                                        <span className="text-gray-700 font-medium mb-2">Date of Establishment</span>
                                        <input
                                            {...register("date_of_est")}
                                            type="date"
                                            placeholder="mm/dd/yyyy"
                                            className="border border-slate-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#01a0a9] bg-gray-50"
                                        />
                                    </label>

                                </div>

                            </div>
                        }


                        {/* component2 */}
                        {count === 2 &&
                            <div className="text-left flex w-[80vw] md:w-[60vw] border p-6 bg-[#e9f9f8] rounded-2xl flex-col gap-8">
                                {/* Title */}
                                <h1 className="text-sm md:text-3xl text-[#01a0a9] font-bold">Clinic Address & Admin Information</h1>

                                {/* Address Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                    {/* Province */}
                                    <label className="flex flex-col w-full">
                                        <span className="text-gray-700 font-medium mb-2">Province</span>
                                        <input
                                            {...register("province", { required: "Province is required" })}
                                            type="text"
                                            placeholder="Province name"
                                            className={`border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${errors.province ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-[#01a0a9]"
                                                } bg-gray-50`}
                                        />
                                        {errors.province && (
                                            <span className="text-red-500 text-sm mt-1">{errors.province.message}</span>
                                        )}
                                    </label>

                                    {/* State */}
                                    <label className="flex flex-col w-full">
                                        <span className="text-gray-700 font-medium mb-2">State</span>
                                        <input
                                            {...register("state", { required: "State is required" })}
                                            type="text"
                                            placeholder="State name"
                                            className={`border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${errors.state ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-[#01a0a9]"
                                                } bg-gray-50`}
                                        />
                                        {errors.state && (
                                            <span className="text-red-500 text-sm mt-1">{errors.state.message}</span>
                                        )}
                                    </label>

                                    {/* City */}
                                    <label className="flex flex-col w-full">
                                        <span className="text-gray-700 font-medium mb-2">City</span>
                                        <input
                                            {...register("city", { required: "City is required" })}
                                            type="text"
                                            placeholder="City name"
                                            className={`border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${errors.city ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-[#01a0a9]"
                                                } bg-gray-50`}
                                        />
                                        {errors.city && (
                                            <span className="text-red-500 text-sm mt-1">{errors.city.message}</span>
                                        )}
                                    </label>

                                    {/* Postal */}
                                    <label className="flex flex-col w-full">
                                        <span className="text-gray-700 font-medium mb-2">Postal</span>
                                        <input
                                            {...register("postal", { required: "Postal code is required" })}
                                            type="text"
                                            placeholder="Postal Code"
                                            className={`border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${errors.postal ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-[#01a0a9]"
                                                } bg-gray-50`}
                                        />
                                        {errors.postal && (
                                            <span className="text-red-500 text-sm mt-1">{errors.postal.message}</span>
                                        )}
                                    </label>

                                    {/* Address */}
                                    <label className="flex flex-col w-full md:col-span-2">
                                        <span className="text-gray-700 font-medium mb-2">Address</span>
                                        <input
                                            {...register("address", { required: "Address is required" })}
                                            type="text"
                                            placeholder="Full Address"
                                            className={`border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${errors.address ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-[#01a0a9]"
                                                } bg-gray-50`}
                                        />
                                        {errors.address && (
                                            <span className="text-red-500 text-sm mt-1">{errors.address.message}</span>
                                        )}
                                    </label>

                                    {/* Email */}
                                    <label className="flex flex-col w-full">
                                        <span className="text-gray-700 font-medium mb-2">Email</span>
                                        <input
                                            {...register("email", { required: "Clininc admin email is required" })}
                                            type="text"
                                            placeholder="Clinic Admin Email"
                                            className={`border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-[#01a0a9]"
                                                } bg-gray-50`}
                                        />
                                        {errors.email && (
                                            <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
                                        )}
                                    </label>

                                    {/* phone */}
                                    <label className="flex flex-col w-full">
                                        <span className="text-gray-700 font-medium mb-2">Phone</span>
                                        <input
                                            {...register("phone", { required: "Phone No is required" })}
                                            type="text"
                                            placeholder="+92000-0000000"
                                            className={`border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${errors.phone ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-[#01a0a9]"
                                                } bg-gray-50`}
                                        />
                                        {errors.phone && (
                                            <span className="text-red-500 text-sm mt-1">{errors.phone.message}</span>
                                        )}
                                    </label>
                                </div>
                            </div>
                        }


                        {/* Component 3 */}
                        {count === 3 && (
                            <div className="text-left flex flex-col items-center justify-center">
                                {/* Image Container */}
                                <div className="imageConatiner sm:p-10 lg:p-16 flex flex-wrap items-center justify-center gap-20 flex-col lg:flex-row">
                                    {/* Subscription Plans */}
                                    {[
                                        {
                                            id: "basic",
                                            title: "Basic",
                                            description:
                                                "Access essential healthcare services remotely with virtual consultations, basic health checkups, and easy-to-use digital tools.",
                                            price: "$49",
                                            per: "month",
                                            benefits: [
                                                "Number of Doctors Allowed: 1.",
                                                "Number of Patients Allowed: Up to 50.",
                                                "Storage Limit: 100 GB",
                                                "Branding: No branding allowed for the clinic.",
                                            ],
                                            imgSrc: "/pricing (1).png",
                                        },
                                        {
                                            id: "pro",
                                            title: "Pro",
                                            description:
                                                "Perfect for startups and small clinics looking to offer remote care to their patients, with advanced features and personalized support.",
                                            price: "$199",
                                            per: "month",
                                            benefits: [
                                                "Up to 10 telemedicine consultations per month.",
                                                "Video Consultation Hours: Up to 10 hours per month.",
                                                "Electronic health record (EHR) integration.",
                                                "Number of Doctors Allowed: 10.",
                                                "Number of Patients Allowed: Up to 150",
                                                "Storage Limit: 200 GB",
                                                "Branding: No branding allowed for the clinic",
                                            ],
                                            imgSrc: "/pricing (2).png",
                                            tag: "Popular",
                                        },
                                        {
                                            id: "premium",
                                            title: "Premium",
                                            description:
                                                "Access premium healthcare services remotely with virtual consultations, advanced tools, and full-featured support.",
                                            price: "$499",
                                            per: "month",
                                            benefits: [
                                                "Unlimited telemedicine consultations per month.",
                                                "Video Consultation Hours.",
                                                "Electronic health record (EHR) integration.",
                                                "Custom health reports and analytics.",
                                                "Number of Doctors Allowed: 50.",
                                                "Number of Patients Allowed: Up to 500.",
                                                "Unlimited Storage",
                                                "Branding: full Branding Allowed",
                                            ],
                                            imgSrc: "/pricing (3).png",
                                        },
                                    ].map((plan) => (
                                        <div
                                            key={plan.id}
                                            className="py-10 border text-left flex flex-col gap-4 items-baseline px-6 justify-center bg-[#01a0a9] text-[#ffffff] shadow-md sm:rounded-2xl overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-sm hover:bg-[#01a1a9e0] group"
                                        >
                                            {/* Radio Input */}
                                            <input
                                                type="radio"
                                                {...register("selected_plan", { required: "Please select a subscription plan." })}
                                                value={plan.id}
                                                id={`select_${plan.id}`}
                                                name="selected_plan"
                                                className="absolute top-4 right-4 z-40 w-5 h-5 cursor-pointer accent-[#01a0a9]"
                                            />

                                            {/* Plan Content */}
                                            <div className="flex flex-col gap-3 z-40">
                                                {/* Title and Icon */}
                                                <div className="flex gap-3 relative">
                                                    <img className="w-8 h-8" src={plan.imgSrc} alt={plan.title} />
                                                    <div className="flex flex-col items-start justify-center">
                                                        <span className="text-sm text-[#e3e0e0]">For {plan.title}</span>
                                                        <span className="text-lg font-bold">{plan.title}</span>
                                                    </div>
                                                    {plan.tag && (
                                                        <span className="absolute py-1 px-2 text-xs rounded-lg flex items-center justify-center bg-[#91f9fe4a] right-2">
                                                            {plan.tag}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Description */}
                                                <p className="text-left z-40 text-[#e3e0e0] text-sm">{plan.description}</p>
                                            </div>

                                            {/* Middle Part */}
                                            <div className="flex flex-col gap-3 z-40 text-[#e3e0e0]">
                                                {/* Price */}
                                                <h1 className="text-left">
                                                    <span className="text-3xl text-[#ffffff] font-bold">{plan.price}</span>
                                                    <span className="text-[#e3e0e0d6] text-sm">/{plan.per}</span>
                                                </h1>

                                                {/* Why Choose Us */}
                                                <h1 className="text-white z-40 text-base font-bold text-left">Why Choose us?</h1>

                                                {/* Benefits */}
                                                {plan.benefits.map((text, idx) => (
                                                    <div key={idx} className="flex gap-2">
                                                        <span className="icon">
                                                            <img width="16px" src="/check1.svg" alt="check" />
                                                        </span>
                                                        <span className="content text-sm">{text}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Button
                                            <a
                                                href="/"
                                                className="text-center text-xs lg:text-sm relative overflow-hidden px-12 py-2 font-semibold text-[#01a0a9] bg-white rounded-lg mx-auto transition-all duration-500 group"
                                            >
                                                <span className="relative">Get Started</span>
                                            </a> */}
                                        </div>
                                    ))}
                                </div>

                                {/* Error Message */}
                                {errors.selected_plan && (
                                    <p className="text-red-500 text-sm mt-2">{errors.selected_plan.message}</p>
                                )}

                                <label className="flex flex-col w-[60vw] border-2 border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 hover:border-[#01a0a9] hover:bg-gray-100 cursor-pointer">
                                    <div className="flex flex-col items-center text-center space-y-2">
                                        {/* Upload Icon */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-10 h-10 text-[#7B61FF]"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 4v16m8-8H4m16 0a8 8 0 10-16 0 8 8 0 0016 0z"
                                            />
                                        </svg>
                                        {/* Text */}
                                        <h3 className="font-medium text-gray-900">
                                            Drag and drop files or{" "}
                                            <span className="text-[#7B61FF] underline">Browse.</span>
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
                                        </p>
                                    </div>
                                    {/* File Input */}
                                    <input
                                        {...register("files", {
                                            required: "File attachment is required",
                                        })}
                                        type="file"
                                        multiple
                                        className="hidden"
                                    />
                                    {/* Error Message */}
                                    {errors.files && (
                                        <span className="text-red-500 text-sm mt-2">
                                            {errors.files.message}
                                        </span>
                                    )}
                                </label>



                            </div>
                        )}




                        {/* component 4 */}
                        {count === 4 &&
                            <div className="flex items-center justify-center min-h-screen px-6 py-12">
                                {/* Main Container */}
                                <div className="flex flex-col items-center w-[80vw] md:w-[60vw] bg-[#e5f9f8] p-6 border rounded-2xl shadow-lg gap-8 text-center">

                                    {/* Icon */}
                                    <div className="flex items-center justify-center rounded-full bg-[#01a0a9]">
                                        <img src="/success.svg" alt="Success" className="w-48 h-48 text-white" />
                                    </div>

                                    {/* Heading */}
                                    <h1 className="text-2xl md:text-3xl font-bold text-[#01a0a9]">Thank You!</h1>

                                    {/* Message */}
                                    <p className="text-gray-700 text-sm md:text-lg leading-6">
                                        Thank you for submitting your clinic registration form. <br />
                                        Your application is currently under review. You will receive an update at your registered email address within one business day. <br />
                                        <span className="font-semibold">
                                            We appreciate your promptness and look forward to serving you.
                                        </span>
                                    </p>

                                    {/* Button */}
                                    <a
                                        href="/"
                                        className="w-full md:w-auto px-6 py-3 text-sm md:text-base hover:scale-105 font-semibold text-white bg-[#01a0a9] rounded-md hover:bg-[#01989c] shadow-md transition-all"
                                    >
                                        Back to Home
                                    </a>
                                </div>
                            </div>}


                        {/* Components control buttons */}
                        <div className="flex gap-10 p-5 justify-end">
                            {/* Show 'Previous' button on all steps except the first */}
                            {count > 1 && count < 4 && (
                                <button
                                    onClick={() => { colorToggler('previous') }}
                                    className="bg-[#01a0a9] hover:shadow-sm hover:scale-105 transition-all text-white px-5 py-2 rounded-lg"
                                >
                                    Previous
                                </button>
                            )}

                            {/* Show 'Next' button on steps 1, 2, and 3 */}
                            {count < 3 && (
                                <button
                                    onClick={() => { colorToggler('next') }}
                                    className="bg-[#01a0a9] hover:shadow-sm hover:scale-105 transition-all text-white px-5 py-2 rounded-lg"
                                >
                                    Next
                                </button>
                            )}

                            {/* Show 'Submit' button on Step 3 */}
                            {count === 3 && (
                                <button type='submit'
                                    onClick={() => { colorToggler('next') }}
                                    className="bg-[#01a0a9] hover:shadow-sm hover:scale-105 transition-all text-white px-5 py-2 rounded-lg"
                                >
                                    Submit
                                </button>
                            )}
                        </div>


                    </form>



                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Registration