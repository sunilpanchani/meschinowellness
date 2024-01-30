import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loader = () => (
    <div
        style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.8)",
        }}
    >
        <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fabf1"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
);

export default Loader;
