const skibidi = document.getElementById('skibidi');

function generateCalender(year, season) {
    let instructionalDays;
    let fall = false;
    let spring = false;
    let summer = false;
    //season==='fall' ? fall=true : season==='spring' ? spring=true : season==='summer' ? summer=true : season=null; // makes conditionals easier
    if (season === 'fall') {
      instructionalDays = 68;
  } else if (season === 'spring') {
      instructionalDays = 73;
  } else if (season === 'summer') {
      instructionalDays = 57;
  } else {
      instructionalDays = null;
  } // Records instructional days based off of time of year
    /*let y2024 = false;
    let y2025 = false;
    let y2026 = false;
    year===2024 ? y2024=true : year===2025 ? y2025=true : year===2026 ? y2026=true : year=null; // makes conditionals easier*/
    const table = document.createElement('table');
    table.setAttribute('id', 'calender');
    if (document.getElementById('calender')) {
      document.getElementById('calender').remove();
    }
    // actual code starts here
    switch (year) {
        case 2024:
            if (season==='fall') {
                console.log('fall 2024');
                table.innerHTML=`
                <p>${instructionalDays} instructional days.</p>
                <tr>
                  <td>
                    Open Registration
                  </td>
                  <td>
                    August 19-23
                  </td>
                </tr>
                <tr>
                  <td>
                    Move-In
                  </td>
                  <td>
                    August 21
                  </td>
                </tr>
                <tr>
                  <td>
                    Classes Begin
                  </td>
                  <td>
                    August 26
                  </td>
                </tr>
                <tr>
                  <td>
                    Labor Day Holiday
                  </td>
                  <td>
                    September 2
                  </td>
                </tr>
                <tr>
                  <td>
                    Fall Recess
                  </td>
                  <td>
                    October 10-11
                  </td>
                </tr>
                <tr>
                  <td>
                    Veteran's Day Holiday
                  </td>
                  <td>
                    November 11
                  </td>
                </tr>
                <tr>
                  <td>
                    Thanksgiving Holiday
                  </td>
                  <td>
                    November 27-December 1
                  </td>
                </tr>
                <tr>
                  <td>
                    Classes End
                  </td>
                  <td>
                    December 6
                  </td>
                </tr>
                <tr>
                  <td>
                    Study Days
                  </td>
                  <td>
                    December 7-10
                  </td>
                </tr>
                <tr>
                  <td>
                    Exams
                  </td>
                  <td>
                    December 11-18
                  </td>
                </tr>
                <tr>
                  <td>
                    Winter Recess Holiday
                  </td>
                  <td>
                    December 19-January 12
                  </td>
                </tr>
                `
            }
                console.log('spring 2024');
            break;

        case 2025:
            if (season==='spring') {
                console.log('spring 2025');
                table.innerHTML=`
                <p>${instructionalDays} instructional days.</p>
                <tr>
                  <td>
                    Open Registration
                  </td>
                  <td>
                    January 9-10
                  </td>
                </tr>
                <tr>
                  <td>
                    Classes Begin
                  </td>
                  <td>
                    January 13
                  </td>
                </tr>
                <tr>
                  <td>
                    Martin Luther King’s Birthday Holiday
                  </td>
                  <td>
                    January 20
                  </td>
                </tr>
                <tr>
                  <td>
                    President’s Day Holiday
                  </td>
                  <td>
                    February 17
                  </td>
                </tr>
                <tr>
                  <td>
                    Spring Recess
                  </td>
                  <td>
                    March 16-23
                  </td>
                </tr>
                <tr>
                  <td>
                    Classes End
                  </td>
                  <td>
                    May 2
                  </td>
                </tr>
                <tr>
                  <td>
                    Study Days
                  </td>
                  <td>
                    May 3-6
                  </td>
                </tr>
                <tr>
                  <td>
                    Exams
                  </td>
                  <td>
                    May 7-14
                  </td>
                </tr>
                <tr>
                  <td>
                    Commencement
                  </td>
                  <td>
                    May 16
                  </td>
                </tr>
                `
            } else if (season==='summer') {
                console.log('summer 2025');
                table.innerHTML=`
                <p>${instructionalDays} instructional days.</p>
                <tr>
                  <td>
                    Registration
                  </td>
                  <td>
                    May 19-20
                  </td>
                </tr>
                <tr>
                  <td>
                    Classes Begin
                  </td>
                  <td>
                    May 21
                  </td>
                </tr>
                <tr>
                  <td>
                    Memorial Day Holiday
                  </td>
                  <td>
                    May 26
                  </td>
                </tr>
                <tr>
                  <td>
                    Juneteenth Holiday
                  </td>
                  <td>
                    June 19
                  </td>
                </tr>
                <tr>
                  <td>
                    Independence Day Holiday
                  </td>
                  <td>
                    July 4
                  </td>
                </tr>
                <tr>
                  <td>
                    Classes End
                  </td>
                  <td>
                    August 12
                  </td>
                </tr>
                `
            } else if (season==='fall') {
                console.log('fall 2025');
                table.innerHTML=`
                <p>${instructionalDays} instructional days.</p>
                <tr>
                  <td>
                    Open Registration
                  </td>
                  <td>
                    August 18-22
                  </td>
                </tr>
                <tr>
                  <td>
                  Move-In
                  </td>
                  <td>
                  August 20
                  </td>
                </tr>
                <tr>
                  <td>
                  Classes Begin
                  </td>
                  <td>
                  August 25
                  </td>
                </tr>
                <tr>
                  <td>
                  Labor Day Holiday
                  </td>
                  <td>
                  September 1
                  </td>
                </tr>
                <tr>
                  <td>
                  Fall Recess
                  </td>
                  <td>
                  October 9-10
                  </td>
                </tr>
                <tr>
                  <td>
                  Veterans Day Holiday
                  </td>
                  <td>
                  November 11
                  </td>
                </tr>
                <tr>
                  <td>
                  Thanksgiving Holiday
                  </td>
                  <td>
                  November 26-30
                  </td>
                </tr>
                <tr>
                  <td>
                  Classes End
                  </td>
                  <td>
                  December 5
                  </td>
                </tr>
                <tr>
                  <td>
                  Study Days
                  </td>
                  <td>
                  December 6-9
                  </td>
                </tr>
                <tr>
                  <td>
                  Exams
                  </td>
                  <td>
                  December 10-17
                  </td>
                </tr>
                <tr>
                  <td>
                  Winter Recess Holiday
                  </td>
                  <td>
                  December 18-January 11
                  </td>
                </tr>
                `
            }
            break;
    }
    skibidi.appendChild(table);
}

generateCalender(2025, 'spring');