
document.getElementById("but").onclick=function(){

    var dayy = document.getElementById("FstInp").value;
    var monthhh = document.getElementById("SecInp").value;
    var monthsss = monthhh.toLowerCase();

    let sign;

        if(monthsss == 'january')
        {
            if(dayy<20)
            {
                sign = 'Capricorn';
            }
            else
            {
                sign = 'Aquarius'
            }
            
        }

        else if(monthsss == 'febuary')
        {
            if(dayy<20)
            {
                sign = 'Aquarius';
            }
            else
            {
                sign = 'Pisces'
            }

        }

        else if(monthsss == 'febuary')
        {
            if(dayy<19)
            {
                sign = 'Aquarius';
            }
            else
            {
                sign = 'Pisces'
            }

        }
        
        else if(monthsss == 'march')
        {
            if(dayy<21)
            {
                sign = 'Pisces';
            }
            else
            {
                sign = 'Aries'
            }

        } 
        
        else if(monthsss == 'april')
        {
            if(dayy<20)
            {
                sign = 'Aries';
            }
            else
            {
                sign = 'Taurus'
            }

        }
        
        else if(monthsss == 'may')
        {
            if(dayy<21)
            {
                sign = 'Taurus';
            }
            else
            {
                sign = 'Gemini'
            }

        } 
        
        else if(monthsss == 'june')
        {
            if(dayy<21)
            {
                sign = 'Gemeni';
            }
            else
            {
                sign = 'Cancer'
            }

        } 
        
        else if(monthsss == 'july')
        {
            if(dayy<23)
            {
                sign = 'Cancer';
            }
            else
            {
                sign = 'Leo'
            }

        } 
        
        else if(monthsss == 'august')
        {
            if(dayy<23)
            {
                sign = 'Leo';
            }
            else
            {
                sign = 'Virgo'
            }

        } 
        
        else if(monthsss == 'september')
        {
            if(dayy<23)
            {
                sign = 'Virgo';
            }
            else
            {
                sign = 'Libra'
            }

        }
        
        else if(monthsss == 'october')
        {
            if(dayy<23)
            {
                sign = 'Libra';
            }
            else
            {
                sign = 'Scorpio'
            }

        }
        
        else if(monthsss == 'november')
        {
            if(dayy<22)
            {
                sign = 'Scorpio';
            }
            else
            {
                sign = 'Sagittarius'
            }

        }

        else if(monthsss == 'december')
        {
            if(dayy<22)
            {
                sign = 'Sagittarius';
            }
            else
            {
                sign = 'Capricorn'
            }

        }
 

   document.getElementById("output").innerHTML = "Your Sign is : " + sign; 


}







