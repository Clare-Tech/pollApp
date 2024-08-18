"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: javascript", "1: python", "2: Rust", " 3:C++"],
  answer: new Array(4).fill(0),
  registerNewAnswer() {
    // get answer
    const answer = Number(
      prompt(
        `${this.question}\n ${this.options.join("\n")}\n (Write option number)`
      )
    );
    console.log(answer);

    // register answer
    typeof answer === "number" && answer < this.options.length && this.answer[answer]++
    this.displayResults()
    this.displayResults("string")
    },

    displayResults: function(type="array"){
      if(type === "array"){
        console.log(this.answer);
      }else if(type === "string"){
        console.log(`poll results are ${this.answer.join(", ")}`);
        
      }
    }
};
// poll.registerNewAnswer()
document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll))

poll.displayResults.call({answer:[5,2,3]}, "string")