import React, { useEffect, useState } from 'react'
import flagsmith from 'flagsmith';
import { useFlags, useFlagsmith } from 'flagsmith/react';
import DiyCards from '../../components/DiyCards';
import Carousel1 from '../../components/Carousel1';
import Carousel2 from '../../components/Carousel2';
import GeneratePage from '../generatePage/GeneratePage';
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import StepsCard from '../../components/StepsCard';
import Footer from '../../components/Footer';
import Maintainance from '../Maintainance';

const HomePage = () => {

    const flags = useFlags(['maintenance']); // only causes re-render if specified flag values / traits change

    const maintain = flags.maintenance.enabled;
    console.log(maintain)

    const [showSteps, setShowSteps] = useState(false)
    const [craftTitle, setCraftTitle] = useState("")
    const [craftsteps, setcraftSteps] = useState([])
    const handleSelect = (title, steps) => {
        setCraftTitle(title)
        setcraftSteps(steps)
        setShowSteps(true)
        console.log("Hewiorksjdlfksdfljk")
    }

    const cardsData = [
        {
            title: "Paper Bowl",
            imageSrc: "https://modpodgerocksblog.b-cdn.net/wp-content/uploads/2021/07/Modge-Podge-paper-mache-960x951.jpg.webp",
            description: "Get a list of easy things to make at home! These use simple techniques and supplies you probably have in your pantry or craft stash.",
            isNew: true,
            categories: ['Paper', 'Crafts'],
            steps: [
                'Step 1: Choose Paper: Select sturdy paper like construction paper or cardstock.',
                'Step 2: Cut Strips: Cut long strips of equal width from your paper.',
                'Step 3: Start Coiling: Apply glue to the end of a strip and coil it around itself.',
                'Step 4: Continue Coiling: Add glue and keep coiling strips, flat or angled.',
                'Step 5: Build Layers: Add more strips to increase height.',
                'Step 6: Secure End: Tuck the final strip end under and glue it.',
                'Step 7: Let it Dry: Allow glue to dry completely.',
                'Step 8: Decorate (Optional): Paint, add glitter, or decorate with cutouts.',
            ]
        },
        {
            title: "Rose",
            imageSrc: "https://plus.unsplash.com/premium_photo-1663088413939-b0caff27cea4?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Decorate your room with beautiful roses.",
            isNew: false,
            categories: ['Fashion', 'Beauty'],
            steps: [
                'Step 1: Cut Paper:  Choose a square piece of paper for your rose. You can use construction paper, crepe paper, or even tissue paper for a softer look.',
                'Step 2: Fold the Paper Diagonally:  Take the square piece of paper and fold it corner to corner to create a perfect triangle.',
                'Step 3: Draw and Cut the Petal Shape:   On the folded triangle, draw a curved line along the open edge resembling a half-petal shape. Remember, the wider the curve, the rounder your rose petals will be. Cut out this shape.',
                'Step 4: Create Multiple Petals (Optional):  If you want a fuller rose, repeat step 3 on another piece of paper. You can even make a few petals slightly smaller for a more natural look.',
                'Step 5: Shape the Petals (Optional):   For a more realistic rose, use a pencil or a toothpick to gently curl the edges of the petals outwards. You can curl them more for a dramatic effect or keep them subtle.',
                'Step 6: Make the Rose Center:  Cut a small circle from the leftover paper. This will be the base for your rose. ',
                'Step 7: Assemble the Rose:  Apply a small amount of glue to the bottom edge of a large petal. Wrap it around the center circle, overlapping slightly. Hold it in place for a few seconds to secure it.',
                'Step 8: Add More Petals:  Continue adding glue to the base of each petal, wrapping them around the center circle and slightly overlapping the previous petal. Arrange the petals to create a spiral pattern.',
                'Step 9: Secure the Base:  Once all the petals are attached, add a small dab of glue to the underside of the last petal and secure it to the base of the rose.',
                'Step 10: Let the Glue Dry:  Allow the glue to dry completely before handling your beautiful paper rose!',
            ]
        },
        {
            title: "Pit Bottle",
            imageSrc: "https://modpodgerocksblog.b-cdn.net/wp-content/uploads/2017/01/Recycle-pill-containers-into-organizers-e1699479407403-942x1200.jpg.webp",
            description: "If you have a giant purse, I have a solution to losing things in the black hole – recycle pill bottles into organizers! So easy to make.",
            isNew: true,
            categories: [],
            steps: [
                'Step 1: Wash and Dry the Pill Bottle:   Remove any labels and ensure the pill bottle is completely clean and dry. This is important to avoid any residue transfer.',
                'Step 2: Cut Paper for Decoration (Optional):  Choose decorative paper, magazine clippings, or colorful construction paper. Cut out shapes or designs to fit the size of your pill bottle.',
                'Step 3: Decorate the Bottle (Optional):  If using paper decorations, apply a thin layer of glue to the back of the paper and carefully adhere it to the pill bottle. Smooth out any air bubbles for a clean finish. You can also paint the bottle with acrylic paint for a more personalized touch.',
                'Step 4: Cut Craft Foam or Felt (Optional):   For a more padded or textured look, cut out shapes from craft foam or felt to fit the bottle. You can use these shapes to create dividers inside the container or stick them on the outside for decoration.',
                'Step 5: Create Dividers (Optional):  If you want compartments inside your container, cut thin strips of cardboard or craft foam and glue them vertically inside the bottle to create dividers.',
                'Step 6: Designate the Lid (Optional):  Decide if you want to use the pill bottle original lid or create a new one from cardboard. If using cardboard, cut a circle slightly larger than the bottle opening and decorate it as desired.',
                'Step 7: Attach the Lid (Optional):   If you made a new lid from cardboard, apply glue to the rim of the bottle opening and secure the cardboard lid on top. You can also add a small ribbon or string as a pull tab for the lid.',
                'Step 8: Let the Glue Dry Completely:  Allow all the glue to dry thoroughly before using your recycled pill bottle container.',
                'Step 9: Organize and Enjoy!   Use your recycled pill bottle to store small items like jewelry, sewing supplies, coins, or even ear buds. Get creative and personalize it to match your needs!',
            ]
        },
        {
            title: "Corner bookmarks",
            imageSrc: "https://modpodgerocksblog.b-cdn.net/wp-content/uploads/2021/09/Duck-Tape-Corner-Bookmarks-Detail.jpg.webp",
            description: "Learn how to make DIY corner bookmarks using cardstock and Duck Tape! Both kids and adults will love making these; they’re so easy",
            isNew: false,
            categories: ['Book', 'Accessories'],
            steps: [
                'Step 1: Gather your materials:  You wll need a square piece of cardstock (any size you prefer for the bookmark), Duck Tape in your chosen design, scissors, and a pen (optional).',
                'Step 2: Fold the cardstock:  Take your square piece of cardstock and fold it diagonally corner to corner to create a perfect triangle.',
                'Step 3: Cut the triangle in half (Optional):  If you want two identical corner bookmarks, cut the folded triangle in half along the fold line.',
                'Step 4: Cover the cardstock with Duck Tape (Optional):  This step is optional if you like the color of your cardstock. If you want a Duck Tape design, cut a piece of Duck Tape slightly larger than the cardstock triangle and adhere it smoothly, covering the entire surface.',
                'Step 5: Cover the triangle with another piece of Duck Tape:  Cut a second piece of Duck Tape slightly larger than the first piece. This will be the decorative side that folds over the corner of the page. You can use a patterned Duck Tape or a solid color for contrast.',
                'Step 6: Round the corners (Optional):  If you prefer softer corners, use scissors to slightly round off the two pointed corners of the triangle on the decorative Duck Tape side.',
                'Step 7: Fold the excess Duck Tape over the cardstock:  Take the second piece of Duck Tape (the decorative side) and fold the excess material over the edges of the cardstock triangle, creating a clean finish.',
                'Step 8: (Optional) Label your bookmark (with pen):  If you will like to personalize your bookmark, use a pen to write your name or a message on the back of the cardstock before covering it with Duck Tape (step 4).',
                'Step 5: Enjoy your corner bookmark!  Slide it between the pages of your book to mark your spot and add a touch of personality.',
            ]
        },
        {
            title: "Book covers",
            imageSrc: "https://modpodgerocksblog.b-cdn.net/wp-content/uploads/2015/06/FABRIC-COVERED-BOOKS11.jpg.webp",
            description: "Learn how decorate book covers with fabric and Mod Podge. This DIY home decor can use fabric scraps.",
            isNew: true,
            categories: ['Book'],
            steps: [
                'Step 1: Gather your materials:  You wll need fabric large enough to cover the front, back, and spine of your book with some extra for tucking, Mod Podge (matte or glossy finish depending on your preference), a paintbrush, scissors, a ruler (optional), and a pencil (optional).',
                'Step 2: Prepare your book (Optional):  If the book has a jacket or dust cover, remove it for this project. You can also gently wipe down the existing cover with a damp cloth to remove any dust or debris.',
                'Step 3: Cut your fabric:  Lay the fabric flat and place your book on top. Use a ruler and pencil (optional) to mark the fabric, leaving about 1-2 inches of extra fabric on all sides for folding over the edges. Cut out the fabric piece.',
                'Step 4: Apply Mod Podge to the book cover:   Using your paintbrush, spread a thin layer of Mod Podge evenly over the front cover of the book.',
                'Step 5: Place the fabric on the book:  Carefully position the fabric on the book, smoothing out any wrinkles as you go. Gently press the fabric down onto the Mod Podged surface, starting from the center and working your way outwards to avoid air bubbles.',
                'Step 6: Fold the fabric edges:   Once the fabric is adhered to the front cover, fold the excess fabric over the edges of the book and onto the inside. Use the paintbrush and Mod Podge to secure the folded fabric to the inside of the book cover.',
                'Step 7: Repeat for the back cover:  Apply Mod Podge to the back cover of the book, position the fabric, smooth it out, and fold the excess fabric edges to the inside, adhering them with Mod Podge.',
                'Step 8: Address the spine:   Carefully cut two small slits on opposite sides of the fabric near the spine, allowing the fabric to fold around the spine without bunching. Apply Mod Podge to the exposed spine of the book and fold the fabric over it, smoothing out any wrinkles.',
                'Step 9: Let it dry completely:  Allow the Mod Podge to dry completely, following the drying time recommendations on the product label. This can take several hours.',
                'Step 10: Apply a final coat (Optional):  Once dry, you can apply a thin layer of Mod Podge over the entire fabric-covered book for added protection and a finished look. Let this coat dry completely as well.',
                'Step 11: Enjoy your decorative book cover!  Your book is now adorned with a beautiful fabric cover, adding a personal touch to your bookshelf.',
            ]
        },
        {
            title: "Wodden frame",
            imageSrc: "https://hips.hearstapps.com/hmg-prod/images/adult-craft-ideas-wood-frame-641699b074f22.jpeg?crop=1xw:1xh;center,top&resize=980:*",
            description: "Easily update your wood frame with half-round molding and bold paint.",
            isNew: true,
            categories: ['Wood', 'Pictures'],
            steps: [
                'Step 1: Gather your materials:  You wll need wood boards (cut to your desired frame size and thickness), half-round molding (enough for the perimeter of your frame), miter saw, sandpaper, wood glue, paint (bold color of your choice), paintbrush, tape (optional), and picture hanging hardware (optional).',
                'Step 2: Cut the wood boards:  Using the miter saw, cut your wood boards to the desired length for the frame.  For a clean corner finish, set the miter saw to a 45-degree angle and make two cuts per board to create a perfect corner joint.',
                'Step 3: Sand the wood boards:   Lightly sand all surfaces of the cut wood boards with sandpaper to remove any splinters or imperfections. Wipe away any sanding dust with a clean cloth.',
                'Step 4: (Optional) Apply painter tape:  If you want clean paint lines where the wood meets the molding, apply painter tape along the edges of the wood boards where the molding will be attached.',
                'Step 5: Cut the molding:  Use the miter saw again to cut the half-round molding pieces at 45-degree angles for a seamless corner fit. Ensure the total length of molding pieces matches the perimeter of your frame.',
                'Step 6: Dry fit the frame:   Place the cut wood boards together to form the frame, positioning the molding pieces along the edges. Check for proper alignment and make adjustments if needed.',
                'Step 7: Apply wood glue:  Apply a thin layer of wood glue along the edges of the wood boards where the molding will be attached. ',
                'Step 8: Assemble the frame:  Carefully press the molding pieces onto the wood boards with the glued edges. Use a clamp or painter tape (to hold the pieces securely) to ensure a tight fit while the glue dries. Repeat for all four sides of the frame.',
                'Step 9: Let the glue dry completely:   Refer to the drying time instructions on the wood glue and allow it to dry thoroughly before proceeding. ',
                'Step 10: Paint the frame (Optional):  If using paint, choose a bold color and apply two to three thin coats of paint to the entire frame, allowing each coat to dry completely before applying the next. Remove the painter tape (if used) after the first coat has dried.',
                'Step 11: Attach hanging hardware (Optional):  Depending on how you plan to display your frame, you can attach picture hanging hardware to the back of the frame. Follow the instructions on your chosen hardware for proper installation.',
                'Step 12: Add your artwork (Optional):  Once the paint is dry (if used) and any hanging hardware is attached, you can place your artwork inside the frame and secure it with the backing material (usually included with the frame).',
                'Step 13: Enjoy your creation!  You now have a beautiful custom-made wooden frame with half-round molding and a bold paint finish, ready to showcase your artwork or photo.',
            ]
        },

    ];
    const desig = true

    return (
        <>
            {maintain == true ? <Maintainance /> :
                <>
                    <>
                        <Navbar />
                        <hr />
                        {showSteps == false ?
                            <>
                                {desig && <Carousel1 />}
                                {!desig && <Carousel2 />}

                                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 m-10 md:mx-32 md:my-20' >
                                    {cardsData.map((card, index) => (
                                        <div key={index} onClick={() => { handleSelect(card.title, card.steps) }}>
                                            <DiyCards
                                                key={index}
                                                title={card.title}
                                                imageSrc={card.imageSrc}
                                                description={card.description}
                                                isNew={card.isNew}
                                                categories={card.categories}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </>
                            :
                            <>
                                <div className='min-h-[60vh] flex items-center flex-col'>

                                    <div className='text-3xl w-full text-center m-8 font-bold '>{craftTitle}</div>
                                    <StepsCard recipeData={craftsteps} />
                                </div>
                            </>
                        }
                        <Footer />
                    </>
                </>
            }
        </>
    )
}

export default HomePage