// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume of sphere
 */
const randomNumber = Math.floor(Math.random() * 6) + 1

function checkNumber() {
  // input

  const userNumber = parseFloat(document.getElementById("user-number").value)

  // process
  if (userNumber == randomNumber) {
    // output
    document.getElementById("result").innerHTML =
      "You have guessed the correct number!"
  }

  if (userNumber != randomNumber) {
    //output
    document.getElementById("result").innerHTML =
      "You have guessed the wrong number!"
  }
}
