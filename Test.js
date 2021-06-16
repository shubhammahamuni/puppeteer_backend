
const puppeteer = require('puppeteer');
async function getlikes( url){


    let browser = await puppeteer.launch({headless: false ,args: ['--start-maximized']});
    const page = await browser.newPage();
    let Likes="";
    await page.goto(url);
    

    // let isUsernameNotFound = await page.evaluate(() => {
    //     
    //     if(document.getElementsByTagName('h2')[0]) {
    //      
    //         if(document.getElementsByTagName('h2')[0].textContent == "Sorry, this page isn't available.") {
    //             return true;
    //         }else{
    //             return false;
    //         }
    //     }
    //     else{
    //         return false;
    //     }
    // });


    // if(isUsernameNotFound) {
       
    //     Likes = "Account not exists!";
      
      
    // }

    //to cheak if user is logedin or not
    
    let havetoLogin=false;
    let url_to_be_checked = await page.url();

    if(url_to_be_checked == "https://www.instagram.com/accounts/login/")
    {
        havetoLogin = true;
    }
    else{
        havetoLogin=false;
    }
   // console.log(url_to_be_checked);

    let isPrivateAccount = false;
    if(!havetoLogin)
    {
        
            await page.evaluate(() => {
                // check selector exists
                if(document.getElementsByTagName('h2')[0]) {
                    // check selector text content
                    if(document.getElementsByTagName('h2')[0].textContent == 'This Account is Private') {
                        isPrivateAccount= true;
                    } else {
                        isPrivateAccount= false;
                    }
                } else {
                    isPrivateAccount= false;
                }
            });
            
       
        
    }else
    {
        Likes = "You Need to Login first";
    }
    if(isPrivateAccount == true ){
        Likes = "Private Account"
        
    }else{

        if(isPrivateAccount ==false &&  havetoLogin == false) 
        {
        
            Likes =  await page.evaluate( ()=>{
                
                return document.querySelector('#react-root > section > main > div > div.ltEKP > article > div.eo2As > section.EDfFK.ygqzn > div > div > a > span').textContent;
        
            });
        }


    }
   
   
   console.log("url " + url_to_be_checked );
   
    
   
    
    // let Comments = await page.evaluate(()=>{

    //     return document.getElementsByClassName('.Mr508')[0].length;
    // })

   await browser.close();
    





    return Likes;

}

module.exports = getlikes;