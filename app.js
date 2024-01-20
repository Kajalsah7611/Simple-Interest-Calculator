
        function calculateInterest() {
            const principal = parseFloat(document.getElementById("principal").value);
            const rate = parseFloat(document.getElementById("rate").value);
            const startDate = document.getElementById("startDate").value;

            const endDate = document.getElementById("endDate").value;

            // Assuming a simple interest calculation for demonstration purposes

            const timeDiff = new Date(endDate) - new Date(startDate);  // new Date(endDate) - new Date(startDate) creates Date objects for the start and end dates, and the difference between them is calculated in milliseconds.
            // daysDiff is then calculated by converting the time difference to days (/ (1000 * 60 * 60 * 24)).

            const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
           // console.log(daysDiff)
            const interest = (principal * rate * daysDiff) / 36500 * 12;  // This assumes that the interest rate is provided as a yearly rate, and 36500 is used to approximate the number of days in a year, considering leap years.
            // Calculate total amount (principal + interest)
            const totalAmount = principal + interest;
            // Display the result in the #result div
            const resultElement = document.getElementById("result");
            resultElement.innerHTML = `The interest between ${startDate} and ${endDate} is: <h3>${interest.toFixed(2)}</h3> <br> Total Amount (including interest) is:<h3>${totalAmount.toFixed(2)} </h3>`;

        }
   