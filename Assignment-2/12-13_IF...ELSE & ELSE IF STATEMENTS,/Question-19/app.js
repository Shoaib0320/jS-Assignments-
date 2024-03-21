var a = prompt("Enter a Month Number Please.");

var b = "";

    switch(a){
        case 1: b = "January";
            break;
        case 2: b = "February";
            break;
        case 3: b = "March";
            break;
        case 4: b = "April";
            break;
        case 5: b = "May";
            break;
        case 6: b = "June"; 
            break;
        case 7: b = "July";
            break;
        case 8: b = "August";
            break;
        case 9: b = "September";
            break;
        case 10: b = "October";
            break;
        case 11: b = "November";
            break;
        case 12: b = "December";
            break;
        }

if((a==12) || (a==1) || (a==2)){

   alert(" It is " + a + ", which is in winter.")
}

if((a==3) || (a==4) || (a==5)){

   alert(" It is " + a + ", which is in spring.")
}

if((a==6) || (a==7) || (a==8)){

   alert(" It is " + a + ", which is in summer.")
}

if((a==9) || (a==10) || (a==11)){

   alert(" It is " + a + ", which is in fall.")
}