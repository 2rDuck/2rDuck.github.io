// redirect sign
const signUp = document.querySelector("#sign_up");

signUp.onclick = () => {
    window.location.href = "./sign/sign.html";
};
// redirect sign

// search effect
const searchInput = document.querySelector('.search input');

searchInput.addEventListener("mouseover", function(){
    searchInput.classList.add("searchHover")
})

searchInput.addEventListener("mouseout", function(){
    if(searchInput.value==""){
        searchInput.classList.remove("searchHover")
    }
})
// search effect

// homePage
const homePage = `
<div class="reason">
    <div class="reason-title">
        <p>Tại sao nên đồng hành cùng Travie?</p>
    </div>
    
    <div class="reason-border"></div>

    <div class="reason-details">
        <div class="reason-details-row">
            <img src="https://californiacitrusthreat.org/wp-content/themes/citrus/images/icons/icon-sales.png" alt="">

            <div class="reason-details-row-describe">
                <h1>Giá rẻ & ưu đãi</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

        <div class="reason-details-row">
            <div class="reason-details-row-describe">
                <h1>Thanh toán an toàn</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <img src="https://gobachxanh.com/wp-content/uploads/2019/08/icon_aff_cashpaid.png" alt="">

        </div>
        <div class="reason-details-row">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRioAywVBtxlKybKeZnJ7nAVpoIKBoWd96iF6GsBCwUdxm-ielMUM-cgNx1u_xD-fLnZRg&usqp=CAU" alt="">

            <div class="reason-details-row-describe">
                <h1>Hỗ trợ 24/7</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>

    </div>
</div>

<div class="blog">
    <div class="blog-background"></div>

    <div class="blog-title">
        <p>Xem những bài blog của Travie</p>
    </div>

    <div class="blog-border"></div>

    <div class="blog-content">
        <div class="blog-content-column">
            <img src="https://classbento.com.au/images/class_extra/night-photography-short-course-sydney-10-portrait-big.jpg?1576259922" alt="">

            <p> Lorem ipsum dolor sit amet, consectetur adipisci elit.</p>
        </div>

        <div class="blog-content-column">
            <img src="https://pbs.twimg.com/media/EUg7a81X0AA5YWW.jpg" alt="">

            <p> Lorem ipsum dolor sit amet, consectetur adipisci elit.</p>
        </div>

        <div class="blog-content-column">
            <img src="https://ik.imagekit.io/tvlk/apr-asset/TzEv3ZUmG4-4Dz22hvmO9NUDzw1DGCIdWl4oPtKumOg=/hotels/39000000/38870000/38869900/38869896/84a552fa_z.jpg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit" alt="">

            <p> Lorem ipsum dolor sit amet, consectetur adipisci elit.</p>
        </div>

        <div class="blog-content-column">
            <img src="https://media.istockphoto.com/photos/paraglider-flying-over-mountains-picture-id522078473?k=20&m=522078473&s=612x612&w=0&h=g-GF5kjYgkE45UZuI6_2xVLeZOEi-Tis_-fSqSJuxZ8=" alt="">

            <p> Lorem ipsum dolor sit amet, consectetur adipisci elit.</p>
        </div>

    </div>
</div>

<div class="founder">
    <div class="founder-title">
        <p>Đội ngũ sáng lập</p>
    </div>

    <div class="founder-border"></div>

    <div class="founder-content">
        <div class="founder-content-row">
            <div class="founder-content-column">
                <img src="https://media.istockphoto.com/vectors/simple-human-icon-business-design-isolated-on-white-background-vector-id1077694002?k=20&m=1077694002&s=170667a&w=0&h=nZx_RPt8-6i3ZlDnLdxuQ8Z9SNmjAzHBO6p1-Ksxz8k=" alt="">

                <p>Nguyễn Văn A</p>
            </div>
            
            <div class="founder-content-column">
                <img src="https://media.istockphoto.com/vectors/simple-human-icon-business-design-isolated-on-white-background-vector-id1077694002?k=20&m=1077694002&s=170667a&w=0&h=nZx_RPt8-6i3ZlDnLdxuQ8Z9SNmjAzHBO6p1-Ksxz8k=" alt="">

                <p>Nguyễn Văn A</p>
            </div>

            <div class="founder-content-column">
                <img src="https://media.istockphoto.com/vectors/simple-human-icon-business-design-isolated-on-white-background-vector-id1077694002?k=20&m=1077694002&s=170667a&w=0&h=nZx_RPt8-6i3ZlDnLdxuQ8Z9SNmjAzHBO6p1-Ksxz8k=" alt="">

                <p>Nguyễn Văn A</p>
            </div>
        </div>

        <div class="founder-content-row">
            <div class="founder-content-column">
                <img src="https://media.istockphoto.com/vectors/simple-human-icon-business-design-isolated-on-white-background-vector-id1077694002?k=20&m=1077694002&s=170667a&w=0&h=nZx_RPt8-6i3ZlDnLdxuQ8Z9SNmjAzHBO6p1-Ksxz8k=" alt="">

                <p>Nguyễn Văn A</p>
            </div>
            
            <div class="founder-content-column">
                <img src="https://media.istockphoto.com/vectors/simple-human-icon-business-design-isolated-on-white-background-vector-id1077694002?k=20&m=1077694002&s=170667a&w=0&h=nZx_RPt8-6i3ZlDnLdxuQ8Z9SNmjAzHBO6p1-Ksxz8k=" alt="">

                <p>Nguyễn Văn A</p>
            </div>
            
            <div class="founder-content-column">
                <img src="https://media.istockphoto.com/vectors/simple-human-icon-business-design-isolated-on-white-background-vector-id1077694002?k=20&m=1077694002&s=170667a&w=0&h=nZx_RPt8-6i3ZlDnLdxuQ8Z9SNmjAzHBO6p1-Ksxz8k=" alt="">

                <p>Nguyễn Văn A</p>
            </div>
        </div>
    </div>
    </div>`;

const homePageButton = document.getElementById('homepage_button');

homePageButton.addEventListener('click',function(){
    document.getElementById('content').innerHTML = homePage;
    homePageButton.classList.remove('button-menu2')
    homePageButton.classList.add('button-menu1')
    ticketButton.classList.remove('button-menu1')
    ticketButton.classList.add('button-menu2')
    placeButton.classList.add('button-menu2')
    placeButton.classList.remove('button-menu1')
})
// homePage

// ticket
const ticket = ``;

const ticketButton = document.getElementById('ticket_button');

ticketButton.addEventListener('click', function () {
    document.getElementById('content').innerHTML = ticket;
    ticketButton.classList.remove('button-menu2')
    ticketButton.classList.add('button-menu1')
    homePageButton.classList.remove('button-menu1')
    homePageButton.classList.add('button-menu2')
    placeButton.classList.add('button-menu2')
    placeButton.classList.remove('button-menu1')
})

// ticket

// location
const place = ``;

const placeButton = document.getElementById('place_button');

placeButton.addEventListener('click',function(){
    document.getElementById('content').innerHTML = place;
    placeButton.classList.add('button-menu1')
    placeButton.classList.remove('button-menu2')
    ticketButton.classList.remove('button-menu1')
    ticketButton.classList.add('button-menu2')
    homePageButton.classList.remove('button-menu1')
    homePageButton.classList.add('button-menu2')
})

// location



