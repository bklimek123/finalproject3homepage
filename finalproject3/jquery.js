//let currentSlide = 0;
//
//function showSlide(index) {
//    const slides = document.querySelectorAll('.carousel-item');
//    if (index >= slides.length) {
//        currentSlide = 0;
//    } else if (index < 0) {
//        currentSlide = slides.length - 1;
//    } else {
//        currentSlide = index;
//    }
//    slides.forEach((slide, i) => {
//        slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
//    });
//}
//
//function nextSlide() {
//    showSlide(currentSlide + 1);
//}
//
//function prevSlide() {
//    showSlide(currentSlide - 1);
//}
//
// Initialize the carousel
showSlide(currentSlide);


        let currentSlide = 0;
		const slides = document.querySelectorAll('.carousel-item');
		const totalSlides = slides.length;
		
        function showSlide(index) {
            if (index >= totalSlides) {
               index = 0;
            } else if (index < 0) {
                index = totalSlides - 1;
            } 
	
			currentSlide = index;
			
			slides.forEach((slide, i) => {
				let slidePosition = i - currentSlide;
				 console.log(`Slide ${i} transform: translateX(${slidePosition * 100}%)`);
				
				// Adjust slidePosition to wrap around correctly
				if (slidePosition == 0) {
					slide.style.transform = 'translateX(0)'; // Center slide
				} else if (slidePosition === 1) {
					slide.style.transform = 'translateX(100%)'; // Next slide
				} else if (slidePosition === -1) {
					slide.style.transform = 'translateX(-100%)'; // Previous slide
				} else {
					slide.style.transform = 'translateX(100%)'; // Hide other slides
				}
				//slide.style.transform = `translateX(${slidePosition * 100}%)`;
			});
		}

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

		document.querySelector('.arrow-left').addEventListener('click', prevSlide);
		document.querySelector('.arrow-right').addEventListener('click', nextSlide);

        // Initialize the carousel
        showSlide(currentSlide);
		document.addEventListener('DOMContentLoaded', function(){
			//const categoriesScroll = document.getElementById('categories-scroll');
			const categoriesScroll = document.querySelector('.categories-scroll');
			//const categories = document.getElementById('categories');
			
			let isMouseDown = false;
			let startX;
			let scrollLeft;
			
			categoriesScroll.addEventListener('mousedown', (e) => {
				isMouseDown = true;
				startX = e.pageX - categoriesScroll.offsetLeft;
				scrollLeft = categoriesScroll.scrollLeft;
				categoriesScroll.style.cursor = 'grabbing'; // Change cursor to indicate grabbing
			});
			
			categoriesScroll.addEventListener('mouseleave', () => {
				isMouseDown = false;
				categoriesScroll.style.cursor = 'grab'; // Reset cursor on mouse leave
			});
			
			categoriesScroll.addEventListener('mouseup', () => {
				isMouseDown = false;
				categoriesScroll.style.cursor = 'grab'; // Reset cursor on mouse up
			});
			
			categoriesScroll.addEventListener('mousemove', (e) => {
				if (!isMouseDown) return;
				e.preventDefault();
				const x = e.pageX - categoriesScroll.offsetLeft;
				const walk = (x - startX) * 2; // Adjust multiplier for smoother scrolling
				categoriesScroll.scrollLeft = scrollLeft - walk;
			});
		});