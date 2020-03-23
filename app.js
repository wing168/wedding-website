/* Navigation slide in */

const navSlide = () => {

    const menu = document.querySelector('.mobile');
    const navBar = document.querySelector('.nav-links');

    
    /* Add event listener */

    menu.addEventListener('click', openNav);



    /* functions */

    function openNav() {

       
        navBar.classList.toggle('nav-active');
        menu.classList.toggle('change');
        
        

    }

}

navSlide();


/* Interactive form */

const rsvpForm = () => {

    const attend = document.querySelector('.attend');
    const initialForm = document.querySelector('.initial');
    const secondaryForm = document.querySelector('.secondary');
    const rsvpBtn = document.getElementById('rsvp-btn');
    const formAll = document.querySelector('.form');
    const errorMsg = document.querySelector('.error');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('.close-btn');
    const fullPage = document.querySelector('.modal-wrap');
    
  


    /* Event listener to determine what button to show */

    attend.addEventListener('change', function(e) {
        
        if (e.target.value === 'no') {

            rsvpBtn.textContent = 'Submit';
            rsvpBtn.style.display = 'block';
            secondaryForm.style.display = 'none';
            

        } else if (e.target.value === 'yes') {

            rsvpBtn.textContent = 'Next';

            rsvpBtn.style.display = 'block';

        } else {

            rsvpBtn.style.display = 'none';
        }

        
    })


    /* Event listener for the 'Next' and 'Submit' buttons and form validation */

    rsvpBtn.addEventListener('click', function() {

       

        const email = document.querySelector('.email').value;
        const firstname = document.querySelector('#fname').value;
        const surname = document.querySelector('#sname').value;

        if (rsvpBtn.textContent === 'Next') {
           


            if(email === '' || firstname === '' || surname === '') {

                errorMsg.style.display = 'block';
                
                
                setTimeout(() => {
                    errorMsg.style.display = 'none';
                }, 3000 ) ;

            } else {
                
                initialForm.style.display = 'none';

                secondaryForm.style.display = 'block';

                rsvpBtn.textContent = 'Submit';
            }
        } else {

            const starter = document.querySelector('.starter').value;
            const main = document.querySelector('.main').value;
            const dessert = document.querySelector('.dessert').value;
            

            
            if (email === '' || firstname === '' || surname === ''){
                errorMsg.style.display = 'block';
                
                
                setTimeout(() => {
                    errorMsg.style.display = 'none';
                }, 3000 ) ;
            }
           else if(attend.value === 'yes' && (starter === '' || main === '' || dessert === '') ) {

                errorMsg.style.display = 'block';
                
                
                setTimeout(() => {
                    errorMsg.style.display = 'none';
                }, 3000 ) ;

            } else {
                
                

                modal.style.display = 'block';

                fullPage.style.backgroundColor = 'rgb(0, 0, 0, 0.8)';
                
                initialForm.style.opacity = '0';
                secondaryForm.style.opacity = '0';
                rsvpBtn.style.opacity = '0';

                
                
            }
        }
    })


    /* Event listener for clicking the close button in modal */

    modalCloseBtn.addEventListener('click', function(e) {
        formAll.submit();
    });


     /*if(e.target.children[0].children[0].children[4].value ==='yes') {
            secondaryForm.style.display = 'block';
            rsvpBtn.textContent = 'Submit';

            formAll.addEventListener('submit', function() {
                alert('Thanks for your response');
            }) 
        
            

        } else {
            alert('Thanks for your response');
        }*/

    /*function validateForm1() {

        const email = document.querySelector('.email').value;
        const firstName = document.querySelector('.firstname').value;
        const surname = document.querySelector('.surname').value;

        console.log(email, firstName, surname);

        if (firstName === '' || surname === '' || email === '') {
            return false;
        } else {
            return true;
        }
    }

    console.log(validateForm1());*/

    

}

rsvpForm();






