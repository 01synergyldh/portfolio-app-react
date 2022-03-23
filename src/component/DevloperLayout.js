import React from 'react'
import Developer from './Developer'



export default function DevelopmentLayout() {
    const developerLayout = [
        {
          id: 1,
          Name: "Naveen",
          Designation:"React Developer"
        },
        {
            id: 2,
            Name: "Mohit",
            Designation:"Graphic Designer"
          },
          {
            id: 3,
            Name: "Pardeep sahu",
            Designation:"Node Developer"
          },
          {
            id: 4,
            Name: "Sonu Gupta",
            Designation:"Laraval Developer"
          },
          {
            id: 5,
            Name: "Arshdeep",
            Designation:"React Developer"
          },
          {
            id: 6,
            Name: "Ankush",
            Designation:"Android Developer"
          },
          {
            id: 7,
            Name: "Lovepreet",
            Designation:"IOS Developer"
          },
          {
            id: 8,
            Name: "Arshdeep",
            Designation:"Python Developer"
          },
          {
            id: 9,
            Name: "Ram kumar",
            Designation:"Python Developer"
          },
          {
            id: 10,
            Name: "Naveen",
            Designation:"React Developer"
          },
          {
              id: 11,
              Name: "Mohit",
              Designation:"Graphic Designer"
            },
            {
              id: 12,
              Name: "Pardeep sahu",
              Designation:"Node Developer"
            },
            {
              id: 13,
              Name: "Sonu Gupta",
              Designation:"Laraval Developer"
            },
            {
              id: 14,
              Name: "Arshdeep",
              Designation:"React Developer"
            },
            {
              id: 15,
              Name: "Ankush",
              Designation:"Android Developer"
            },
            {
              id: 16,
              Name: "Lovepreet",
              Designation:"IOS Developer"
            },
            {
              id: 17,
              Name: "Arshdeep",
              Designation:"Python Developer"
            },
            {
              id: 18,
              Name: "Ram kumar",
              Designation:"Python Developer"
            },
            {
                id: 19,
                Name: "Ankush",
                Designation:"Android Developer"
              },
              {
                id: 20,
                Name: "Lovepreet",
                Designation:"IOS Developer"
              },
              {
                id: 21,
                Name: "Arshdeep",
                Designation:"Python Developer"
              },
              {
                id: 22,
                Name: "Ram kumar",
                Designation:"Python Developer"
              },
              {
                id: 23,
                Name: "Lovepreet",
                Designation:"IOS Developer"
              },
              {
                id: 24,
                Name: "Karan",
                Designation:"Python Developer"
              },
              {
                id: 25,
                Name: "Deepak",
                Designation:"Python Developer"
              },
    ]
  return (
    <>
    <input type="text" placeholder='Search...' />
    
  {
                developerLayout.map(item => <Developer {...item} />)

              }
     
    </>
  )
}
