// javascript program to convert 12 hour
// format to 24 hour format
  
 
function print24(str)
{
    // Get hours
    var h1 = Number(str[1] - '0');
    var h2 = Number(str[0] - '0');
    var hh = (h2 * 10 + h1 % 10);
  
    // If time is in "AM"
    if (str[8] == 'A')
    {
        if (hh == 12)
        {
            document.write("00");
            for (var i = 2; i <= 7; i++)
                document.write(str[i]);
        }
        else
        {
            for (var i = 0; i <= 7; i++)
                document.write(str[i]);
        }
    }
  
    // If time is in "PM"
    else
    {
        if (hh == 12)
        {
            document.write("12");
            for (var i = 2; i <= 7; i++)
                document.write(str[i]);
        }
        else
        {
            hh = hh + 12;
            document.write(hh);
            for (var i = 2; i <= 7; i++)
                document.write(str[i]);
        }
    }
}
  
// Driver code
 
    var str = "07:05:45PM";
    print24(str);
 
// This code is contributed by bunnyram1