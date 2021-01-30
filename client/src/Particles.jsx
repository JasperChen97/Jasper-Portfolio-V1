import React, { Component } from "react";
import Particles from "react-particles-js";

const Background = () => {
  return (
    <Particles
      params={{
        "particles": {
            "number": {
                "value": 100
            },
            "size": {
                "value": 3
            },
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        },
      }}
    />
  )
}

export default Background;


