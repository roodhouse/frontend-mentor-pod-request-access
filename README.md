# Frontend Mentor - Pod request access landing page solution

This is my solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

#### Mobile

![](/src/assets/mb.png)

#### Tablet

![](/src/assets/tab.png)

#### Desktop

![](/src/assets/dt.png)

### Links

- Solution URL: [Add URL](https://github.com/roodhouse/frontend-mentor-pod-request-access)
- Live Site URL: [Add live site URL here](https://request.rugh.us)

## My process

### Built with

- HTML5, CSS
- Mobile-first workflow
- React
- Tailwind

### What I learned

This challenge presented a few problems for me. The mobile view contains a masked background image and it was the first time I've encountered something like this. I was able to solve it by creating a background wrapper div that sits along side the main content div. Then I utilized positioning and opacity to lay one bg on top of the other. Here is the code:

```js
<div id='backgroundWrapper' className='absolute w-full md:flex md:justify-end'>
          <div id='backgroundImg' className='bg-[url("./assets/mobile/image-host.jpg")] md:bg-[url("./assets/tablet/image-host.jpg")] xl:bg-[url("./assets/desktop/image-host.jpg")] h-screen md:h-[767px] md:w-[491px] md:absolute md:bg-no-repeat md:z-10 xl:w-[888px] xl:h-[640px] xl:mt-[130px]'></div>
          <div id='background' className='h-screen opacity-[0.7992919683456421] bg-darkBlue absolute w-full bottom-0 md:hidden'></div>
        </div>
```

Another challenge was the form validation. Although I believe that I made it more complicated than it needed to be. I was able to utilize react-hook-form to validate after the submit button was clicked and if the field is empty, and I used a custom function to validate after the submit button was clicked and if the field contains data. The most tricky part was disabling the browser default form validation widget. It was super annoying that the browser code was sitting in front of my code and would not let my code run. Specifically I had to prevent the default behavior on an invalid event. Here is the code:

```js
useEffect(() => {
        var input = document.getElementById('email');
        setInput(input)
        
        input.addEventListener('invalid', function(event) {
            event.preventDefault();
            console.log(event.target.value)
            
            if(isEmailValid(event.target.value)) {
                console.log('true')
            } else {
                console.log('false')
                const errorMsg = document.getElementById('errorP');
                errorMsg.innerHTML = 'Oops! Please check your email'
                console.log(errorMsg)

            }
            
        })
        
    },[])
```

The final issue had to do with the height of the page and the footer section. If the height was not large enough then a white space would appear at the bottom of the page. This was because I placed the footer position as relative so that I could absolutely position the image at large screen size. I fixed this by giving the footer a defined height.

```js
<div id='footer' className='hidden md:block md:bg-darkBlue md:order-5 xl:right-0 xl:bottom-[125px] xl:z-40 xl:bg-transparent xl:relative xl:w-full xl:h-[232px]'>
            <Footer />
</div>

function Footer() {
  return (
    <>
        <img src={Dots} alt='dots' className='xl:absolute xl:top-[58px] xl:right-[-94px]' />
    </>
  )
}
```


### Useful resources

- [Disable the browser vaildation widget](https://webdesign.tutsplus.com/tutorials/html5-form-validation-with-the-pattern-attribute--cms-25145) - This helped me to disable the browser vaildation widget that was standing in the way of my custom code running.
- [Footer positioning](https://www.w3docs.com/snippets/css/how-to-set-absolute-positioning-relative-to-the-parent-element.html) - This helped me to figure out how to position the footer and then the image within the footer in the correct place.

## Author

- Website - [my site](https://rugh.us)
- Frontend Mentor - [@roodhouse](https://www.frontendmentor.io/profile/roodhouse)
- LinkedIn - [John Rugh](https://www.linkedin.com/in/john-m-rugh/)