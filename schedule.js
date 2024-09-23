const skibidi = document.getElementById('skibidi');

function generateCalender(year, season) {
    let instructionalDays;
    let fall = false;
    let spring = false;
    let summer = false;
    season==='fall' ? fall=true : season==='spring' ? spring=true : season==='summer' ? summer=true : season=null; // makes conditionals easier
    fall ? instructionalDays=68 : spring ? instructionalDays=73 ? summer : instructionalDays=57 : instructionalDays=null; // Records instructional days based off of time of year
    /*let y2024 = false;
    let y2025 = false;
    let y2026 = false;
    year===2024 ? y2024=true : year===2025 ? y2025=true : year===2026 ? y2026=true : year=null; // makes conditionals easier*/
    const table = document.createElement('table');
    table.setAttribute('id', 'calender');
    if (document.getElementById('calender')) {
        skibidi.removeChild(table);
    }
    // actual code starts here
    switch (year) {
        case 2024:
            if (fall) {
                console.log('fall 2024');
                table.innerHTML=`
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
            if (spring) {
                console.log('spring 2025');
                table.innerHTML=`
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
            } else if (summer) {
                console.log('summer 2025');
            } else if (fall) {
                console.log('fall 2025');
            }
            break;

        case 2026:
            if (spring) {
                console.log('spring 2026');
            } else if (summer) {
                console.log('summer 2026');
            } else if (fall) {
                console.log('fall 2026');
            }
            break;
    }
    skibidi.appendChild(table);
}

generateCalender(2025, 'spring');