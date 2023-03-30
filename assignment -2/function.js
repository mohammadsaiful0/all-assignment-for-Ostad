var CalculateBtn= document.getElementById('calculate');

CalculateBtn.addEventListener('click', BmiCalculatorBySa); 


function BmiCalculatorBySa(){
    // get the input value by ID
    var height=document.getElementById('height').value;
    var weight=document.getElementById('weight').value;
 //   const status = "";
    // BMI formula 
   // const BMI = weight / (height * height);
    
    // alert Message if user not input anything on input fields
    if  (!height || !weight) {
        //custom alart box from 
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill out the input fields!',
        
          })

        return;
    }
   
       
      // Calculate the BMI from User Input
      var BMI;
      if (height < 3) {
        // If Height is input in meters
        BMI = weight / (height * height);
      } else {
        // If Height is input in centimeters
        BMI = weight / ((height / 100) * (height / 100));
      }
      // take the Number of digits after the decimal point
      var BMIiResultRound = BMI.toFixed(2);
      // Show the Calculation Result in the HTML Result Elements 
      document.getElementById('result').innerHTML=BMIiResultRound;

      // give comment to user from BMI result by Changing the BG color of box 
      var status='';
      var bgColor='';
      if (BMI < 18.5){
        status='UnderWeight';
        bgColor='red';
      }
      else if (BMI<25){
        status= 'Normal';
        bgColor='green';
      }
      else if (BMI < 30){
        status= 'OverWeight';
        bgColor='orange';
      }
      else {
        status='obese';
        bgColor='red';
      }

      var statusItem = document.getElementById(status);
      statusItem.style.backgroundColor=bgColor;
      statusItem.style.color='white';
      
      

};
