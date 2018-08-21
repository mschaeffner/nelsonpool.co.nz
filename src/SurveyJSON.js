export default {
 pages: [
  {
   name: "Demographics",
   elements: [
    {
     type: "html",
     name: "question23"
    },
    {
     type: "radiogroup",
     name: "question3",
     title: "Would a pool in the Northern Nelson area be interesting for you?",
     choices: [
      {
       value: "item1",
       text: "Yes"
      },
      {
       value: "item2",
       text: "No"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question4",
     title: "Where do you live?",
     hasOther: true,
     choices: [
      {
       value: "item1",
       text: "Nelson North communities"
      },
      {
       value: "item2",
       text: "Nelson Town"
      },
      {
       value: "item3",
       text: "Rai Valley"
      },
      {
       value: "item4",
       text: "Atawhai / Marybank"
      },
      {
       value: "item5",
       text: "Tahunanui"
      },
      {
       value: "item6",
       text: "Stoke"
      },
      {
       value: "item7",
       text: "Richmond"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question1",
     title: "How old are you?",
     choices: [
      {
       value: "item1",
       text: "Under 20"
      },
      {
       value: "item2",
       text: "20 to 30"
      },
      {
       value: "item3",
       text: "30 to 40"
      },
      {
       value: "item4",
       text: "40 to 50"
      },
      {
       value: "item5",
       text: "50 to 65"
      },
      {
       value: "item6",
       text: "Over 65"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question2",
     title: "How many adults live in your household",
     choices: [
      {
       value: "item1",
       text: "1"
      },
      {
       value: "item2",
       text: "2"
      },
      {
       value: "item3",
       text: "3"
      },
      {
       value: "item4",
       text: "More than 3"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question5",
     title: "How many children live in your household?",
     choices: [
      {
       value: "item1",
       text: "None"
      },
      {
       value: "item2",
       text: "1"
      },
      {
       value: "item3",
       text: "2"
      },
      {
       value: "item4",
       text: "3"
      },
      {
       value: "item5",
       text: "More than 3"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question6",
     title: "Do you have a household income or pension?",
     choices: [
      {
       value: "item1",
       text: "Yes"
      },
      {
       value: "item2",
       text: "No"
      }
     ]
    }
   ]
  },
  {
   name: "Usage",
   elements: [
    {
     type: "radiogroup",
     name: "question7",
     title: "How often do you use public pools?",
     choices: [
      {
       value: "item1",
       text: "Almost daily"
      },
      {
       value: "item2",
       text: "A few times a week"
      },
      {
       value: "item3",
       text: "A few times a month"
      },
      {
       value: "item5",
       text: "A few times a year"
      },
      {
       value: "item6",
       text: "Never"
      }
     ]
    },
    {
     type: "checkbox",
     name: "Q9",
     title: "Why are you going to the pool? (multiple selection possible)",
     hasOther: true,
     choices: [
      {
       value: "item4",
       text: "Sport"
      },
      {
       value: "item1",
       text: "Staying fit and active"
      },
      {
       value: "item2",
       text: "Meeting friends"
      },
      {
       value: "item3",
       text: "Family leisure"
      }
     ]
    },
    {
     type: "checkbox",
     name: "question8",
     title: "Why don't you go more often to the pool? (multiple selection possible)",
     hasOther: true,
     choices: [
      {
       value: "item4",
       text: "Not interested"
      },
      {
       value: "item2",
       text: "Too far away"
      },
      {
       value: "item3",
       text: "Too expensive"
      },
      {
       value: "item5",
       text: "Use of chemicals"
      },
      {
       value: "item6",
       text: "Access difficult because of age / illness / disability"
      },
      {
       value: "item7",
       text: "Opening hours don’t suit me"
      }
     ]
    },
    {
     type: "matrix",
     name: "question18",
     title: "When do you usually go swimming?",
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
     name: "question19",
     title: "How long do stay at the pool?",
     choices: [
      {
       value: "item1",
       text: "Up to 1 hour"
      },
      {
       value: "item2",
       text: "Up to 2 hours"
      },
      {
       value: "item3",
       text: "Up to 3 hours"
      },
      {
       value: "item4",
       text: "Up to 4 hours"
      },
      {
       value: "item5",
       text: "Longer than 4 hours"
      }
     ]
    },
    {
     type: "matrix",
     name: "question10",
     title: "How likely is it that you are going to the pool…",
     columns: [
      "Very likely",
      "Likely ",
      "Not so likely",
      "Not likely at all"
     ],
     rows: [
      {
       value: "1",
       text: "... alone"
      },
      {
       value: "2",
       text: ".. with your partner"
      },
      {
       value: "3",
       text: "... with your family"
      },
      {
       value: "4",
       text: "... with your friends"
      }
     ]
    },
    {
     type: "matrix",
     name: "question11",
     title: "How much money are you prepared to spend on entry fees?",
     columns: [
      {
       value: "1",
       text: "Free"
      },
      {
       value: "2",
       text: "$1 - $2"
      },
      {
       value: "3",
       text: "$3 - $5"
      },
      {
       value: "4",
       text: "$6 - $8"
      },
      {
       value: "5",
       text: "> $8"
      }
     ],
     rows: [
      "Adult 16+",
      "Baby 0-1",
      "Toddler 2-4",
      "Child 5-15",
      "Over 65"
     ]
    },
    {
     type: "radiogroup",
     name: "question12",
     title: "What do you think is a reasonable price for a a family pass?",
     choices: [
      {
       value: "item1",
       text: "Up to $10"
      },
      {
       value: "item2",
       text: "$10 to $15"
      },
      {
       value: "item3",
       text: "$16 to $20"
      },
      {
       value: "item4",
       text: "More than $20"
      }
     ]
    }
   ]
  },
  {
   name: "Other",
   elements: [
    {
     type: "matrix",
     name: "question17",
     title: "How important are the following aspects for you?",
     columns: [
      {
       value: "1",
       text: "Not important at all"
      },
      {
       value: "2",
       text: "No so important"
      },
      {
       value: "4",
       text: "Important"
      },
      {
       value: "5",
       text: "Very important"
      }
     ],
     rows: [
      "Distance to travel",
      "Costs",
      "Drinks /Food available",
      "Water temperature",
      "Room temperature",
      "Hygiene",
      "Use of chemicals",
      "Features like slides",
      "Sauna /SPA / Wellness",
      "Family / private changing room",
      "Staff",
      "Design"
     ]
    },
    {
     type: "checkbox",
     name: "question13",
     title: "Are you likely to spend money on extras like food, drinks, Sauna and clothes/accessories, etc.?",
     hasOther: true,
     choices: [
      {
       value: "item1",
       text: "None"
      },
      {
       value: "item2",
       text: "Food"
      },
      {
       value: "item3",
       text: "Drinks"
      },
      {
       value: "item4",
       text: "Sauna"
      },
      {
       value: "item5",
       text: "Swimwear"
      },
      {
       value: "item6",
       text: "Accessories"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question14",
     title: "When do your children get swimming lessons?",
     choices: [
      {
       value: "item1",
       text: "I don’t have children / my children are adults "
      },
      {
       value: "item3",
       text: "Never"
      },
      {
       value: "item2",
       text: "Only in summer"
      },
      {
       value: "item4",
       text: "In summer and winter"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question15",
     title: "If you chose “in summer only”, are you interested to have it year- round?",
     choices: [
      {
       value: "item1",
       text: "Yes"
      },
      {
       value: "item2",
       text: "No"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question20",
     title: "Our body temperature is 36°C and a natural pool ranges up to about 28°C. How does that a swimming temperature seem to you?",
     choices: [
      {
       value: "item1",
       text: "OK"
      },
      {
       value: "item2",
       text: "Just right"
      },
      {
       value: "item3",
       text: "Too cold"
      },
      {
       value: "item4",
       text: "OK for adults, but too cold for babies, children and Wellness"
      },
      {
       value: "item5",
       text: "I don’t know"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question16",
     title: "Are you a member of a water-related sports club? If yes, which one?",
     hasOther: true,
     choices: [
      {
       value: "item1",
       text: "No"
      }
     ],
     otherText: "Yes (describe)"
    },
    {
     type: "comment",
     name: "question21",
     title: "Any ideas, comments, feedback? Do you miss something important?"
    }
   ]
  }
 ]
}
