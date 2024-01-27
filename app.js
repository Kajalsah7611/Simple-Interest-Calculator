
        function calculateInterest() {
            const principal = parseFloat(document.getElementById("principal").value);
            const rate = parseFloat(document.getElementById("rate").value);
            const startDate = document.getElementById("startDate").value;

            const endDate = document.getElementById("endDate").value;


            if (isNaN(principal) || isNaN(rate) || startDate === "" || endDate === "") {
                const resultElement = document.getElementById("result");
                resultElement.innerHTML = "Please enter valid values for all fields.";
                return false;  // Return early if validation fails
            }

            // Assuming a simple interest calculation for demonstration purposes

            const timeDiff = new Date(endDate) - new Date(startDate);  // new Date(endDate) - new Date(startDate) creates Date objects for the start and end dates, and the difference between them is calculated in milliseconds.
            // daysDiff is then calculated by converting the time difference to days (/ (1000 * 60 * 60 * 24)).

            const totalDays = timeDiff / (1000 * 60 * 60 * 24);


            const years = Math.floor(totalDays / 365);
            const remainingDays = totalDays % 365;
            const months = Math.floor(remainingDays / 30);
            const days = remainingDays % 30;
        //     const monthsDiff = Math.floor(daysDiff / 30); // Assuming an average month length of 30 days
        //     const yearsDiff = Math.floor(monthsDiff / 12);
        //    // console.log(daysDiff)
            const interest = (principal * rate * totalDays) / 36500 * 12;  // This assumes that the interest rate is provided as a yearly rate, and 36500 is used to approximate the number of days in a year, considering leap years.
            // Calculate total amount (principal + interest)
            const totalAmount = principal + interest;
            // Display the result in the #result div
            const resultElement = document.getElementById("result");
            resultElement.innerHTML =`The interest between ${startDate} and ${endDate} is: <h3>${interest.toFixed(2)}</h3> 
            Duration: ${years} years, ${months} months, ${days} days <br> 
            Total Amount (including interest) is:<h3>${totalAmount.toFixed(2)} </h3>`;
return false
        }
   