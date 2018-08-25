export default {
 pages: [
  {
   name: "Page 1",
   elements: [
    {
     type: "radiogroup",
     name: "q1",
     title: "Would a pool in the Northern Nelson area be interesting for you?",
     choices: [
      {
       value: "1",
       text: "Yes"
      },
      {
       value: "0",
       text: "No"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "q2",
     title: "Where do you live?",
     hasOther: true,
     choices: [
      {
       value: "0",
       text: "Nelson North communities"
      },
      {
       value: "1",
       text: "Nelson Town"
      },
      {
       value: "2",
       text: "Rai Valley"
      },
      {
       value: "3",
       text: "Atawhai / Marybank"
      },
      {
       value: "4",
       text: "Tahunanui"
      },
      {
       value: "5",
       text: "Stoke"
      },
      {
       value: "6",
       text: "Richmond"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "q3",
     title: "How old are you?",
     choices: [
      {
       value: "0",
       text: "Under 16"
      },
      {
       value: "1",
       text: "16 to 20"
      },
      {
       value: "2",
       text: "20 to 30"
      },
      {
       value: "3",
       text: "30 to 40"
      },
      {
       value: "4",
       text: "40 to 50"
      },
      {
       value: "5",
       text: "50 to 65"
      },
      {
       value: "6",
       text: "Over 65"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "q4",
     title: "How many adults live in your household",
     choices: [
      {
       value: "1",
       text: "1"
      },
      {
       value: "2",
       text: "2"
      },
      {
       value: "3",
       text: "3"
      },
      {
       value: "4",
       text: "More than 3"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "q5",
     title: "How many children live in your household?",
     choices: [
      {
       value: "0",
       text: "None"
      },
      {
       value: "1",
       text: "1"
      },
      {
       value: "2",
       text: "2"
      },
      {
       value: "3",
       text: "3"
      },
      {
       value: "4",
       text: "More than 3"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "q6",
     title: "Do you have a household income from paid work or from a pension?",
     choices: [
      {
       value: "1",
       text: "Yes"
      },
      {
       value: "0",
       text: "No"
      }
     ]
    }
   ]
  },
  {
   name: "Page 2",
   elements: [
    {
     type: "radiogroup",
     name: "q7",
     title: "How often do you use public pools?",
     choices: [
      {
       value: "1",
       text: "Almost daily"
      },
      {
       value: "2",
       text: "A few times a week"
      },
      {
       value: "3",
       text: "A few times a month"
      },
      {
       value: "4",
       text: "A few times a year"
      },
      {
       value: "0",
       text: "Never"
      }
     ]
    },
    {
     type: "checkbox",
     name: "q8",
     title: "Why are you going to the pool? (multiple selection possible)",
     hasOther: true,
     choices: [
      {
       value: "0",
       text: "Sport"
      },
      {
       value: "1",
       text: "Staying fit and active"
      },
      {
       value: "2",
       text: "Meeting friends"
      },
      {
       value: "3",
       text: "Family leisure"
      }
     ]
    },
    {
     type: "checkbox",
     name: "q9",
     title: "Why don't you go more often to the pool? (multiple selection possible)",
     hasOther: true,
     choices: [
      {
       value: "0",
       text: "Not interested"
      },
      {
       value: "1",
       text: "Too far away"
      },
      {
       value: "2",
       text: "Too expensive"
      },
      {
       value: "3",
       text: "Use of chemicals"
      },
      {
       value: "4",
       text: "Access difficult because of age / illness / disability"
      },
      {
       value: "5",
       text: "Opening hours don’t suit me"
      }
     ]
    },
    {
     type: "matrix",
     name: "q10",
     title: "When do you usually go swimming in a pool?",
     columns: [
      {
       value: "1",
       text: "Very likely"
      },
      {
       value: "2",
       text: "Likely"
      },
      {
       value: "3",
       text: "Not so likely"
      },
      {
       value: "4",
       text: "Not likely at all"
      }
     ],
     rows: [
      {
       value: "1",
       text: "Early in the morning"
      },
      {
       value: "2",
       text: "In the mornings until midday"
      },
      {
       value: "3",
       text: "Early afternoon"
      },
      {
       value: "4",
       text: "Later afternoon"
      },
      {
       value: "5",
       text: "Evenings"
      },
      {
       value: "6",
       text: "At the weekend"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "q11",
     title: "How long do stay at the pool?",
     choices: [
      {
       value: "1",
       text: "Up to 1 hour"
      },
      {
       value: "2",
       text: "Up to 2 hours"
      },
      {
       value: "3",
       text: "Up to 3 hours"
      },
      {
       value: "4",
       text: "Up to 4 hours"
      },
      {
       value: "5",
       text: "More than 4 hours"
      }
     ]
    },
    {
     type: "matrix",
     name: "q12",
     title: "How likely is it that you are going to the pool…",
     columns: [
      {
       value: "1",
       text: "Very likely"
      },
      {
       value: "2",
       text: "Likely"
      },
      {
       value: "3",
       text: "Not so likely"
      },
      {
       value: "4",
       text: "Not likely at all"
      }
     ],
     rows: [
      {
       value: "1",
       text: "Alone"
      },
      {
       value: "2",
       text: "With your partner"
      },
      {
       value: "3",
       text: "With your family"
      },
      {
       value: "4",
       text: "With your friends"
      }
     ]
    },
    {
     type: "matrix",
     name: "q13",
     title: "How much money are you prepared to spend on entry fees?",
     columns: [
      {
       value: "0",
       text: "Free"
      },
      {
       value: "1",
       text: "$1 - $2"
      },
      {
       value: "2",
       text: "$3 - $5"
      },
      {
       value: "3",
       text: "$6 - $8"
      },
      {
       value: "4",
       text: "> $8"
      }
     ],
     rows: [
       {
        value: "0",
        text: "Adult 16+"
       },
       {
        value: "1",
        text: "Baby 0-1"
       },
       {
        value: "2",
        text: "Toddler 2-4"
       },
       {
        value: "3",
        text: "Child 5-15"
       },
       {
        value: "4",
        text: "Over 65"
       }
     ]
    },
    {
     type: "radiogroup",
     name: "q14",
     title: "What do you think is a reasonable price for a a family pass?",
     choices: [
      {
       value: "0",
       text: "Up to $10"
      },
      {
       value: "1",
       text: "$10 to $15"
      },
      {
       value: "2",
       text: "$16 to $20"
      },
      {
       value: "3",
       text: "More than $20"
      }
     ]
    }
   ]
  },
  {
   name: "Page 3",
   elements: [
    {
     type: "matrix",
     name: "q15",
     title: "How important are the following aspects for you?",
     columns: [
      {
       value: "1",
       text: "Very important"
      },
      {
       value: "2",
       text: "Important"
      },
      {
       value: "4",
       text: "No so important"
      },
      {
       value: "5",
       text: "Not important at all"
      }
     ],
     rows: [
       {
        value: "0",
        text: "Distance to travel"
       },
       {
        value: "1",
        text: "Costs"
       },
       {
        value: "2",
        text: "Drinks /Food available"
       },
       {
        value: "3",
        text: "Water temperature"
       },
       {
        value: "4",
        text: "Room temperature"
       },
       {
        value: "5",
        text: "Hygiene"
       },
       {
        value: "6",
        text: "Use of chemicals"
       },
       {
        value: "7",
        text: "Features like slides"
       },
       {
        value: "8",
        text: "Sauna /SPA / Wellness"
       },
       {
        value: "9",
        text: "Family / private changing room"
       },
       {
        value: "10",
        text: "Staff"
       },
       {
        value: "11",
        text: "Design"
       }
     ]
    },
    {
     type: "checkbox",
     name: "q16",
     title: "Are you likely to spend money on extras like food, drinks, Sauna and clothes/accessories, etc.?",
     hasOther: true,
     choices: [
      {
       value: "0",
       text: "No"
      },
      {
       value: "1",
       text: "Food"
      },
      {
       value: "2",
       text: "Drinks"
      },
      {
       value: "3",
       text: "Sauna"
      },
      {
       value: "4",
       text: "Swimwear"
      },
      {
       value: "5",
       text: "Accessories"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "q17",
     title: "When do your children get swimming lessons?",
     choices: [
      {
       value: "0",
       text: "I don’t have children. / My children are adults."
      },
      {
       value: "1",
       text: "Never"
      },
      {
       value: "2",
       text: "In summer only"
      },
      {
       value: "3",
       text: "In winter and summer"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "q18",
     title: "If you chose “in summer only”, are you interested to have it year- round?",
     choices: [
      {
       value: "1",
       text: "Yes"
      },
      {
       value: "0",
       text: "No"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "q19",
     title: "Our body temperature is 36°C and a natural pool ranges up to about 28°C. How does this swimming temperature feel?",
     choices: [
      {
       value: "0",
       text: "OK"
      },
      {
       value: "1",
       text: "Just right"
      },
      {
       value: "2",
       text: "Too cold"
      },
      {
       value: "3",
       text: "OK for adults, but too cold for babies, children and Wellness"
      },
      {
       value: "4",
       text: "I don’t know"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "q20",
     title: "Are you a member of a water-related sports club? If yes, which one?",
     hasOther: true,
     choices: [
      {
       value: "0",
       text: "No"
      }
     ],
     otherText: "Yes (describe)"
    },
    {
     type: "comment",
     name: "q21",
     title: "Any ideas, comments, feedback? Do you miss something important?"
    }
   ]
  }
 ]
}
