import Chai from './Chai.jpg'
import Royal from './RoyalTea.jpg'
import MachaTea from './MachaTea.jpg'
//
import Americano from'./americano.jpg'
import Darkrosted from './Dark rosted.jpg'
import Espresso from './espresso.jpg'
import Cappuccino from './cappuccino.jpg'
import Vanilla from './VanillaLatte.jpg'
import FlatWhite from './Flatwhite.jpg'
//
import EspressoFrappuccino from './EspressoFrappuccino.jpg'
import MachaFrappuccino from './machaFrappuccino.jpg'
import MochaFrappuccino from './mochaFrappuccino.jpg'

import NewYork from "./location3.jpg"
import LA from "./location2.jpg"
import Paris from "./location1.jpg"

const menu_Tea = [
    {
        imgUrl:Chai,
        category: 'Tea',
        Title:"Hot Chai",
        Price:8.50,
        desc:'Black tea infused with cinnamon, clove and other warming spices is combined with steamed milk and topped with foam for the perfect balance of sweet and spicy. An iconic chai cup.'
    },
    {
        imgUrl:Royal,
        category: 'Tea',
        Title:"Royal English Breakfast Tea",
        Price:4.99,
        desc:'A select blend of rich, full-leaf black teas from India and Sri Lanka sweetened with liquid cane sugar and topped with steamed milk and a velvety foam. Each and every sip—smooth and silky.'
    },
    {
        imgUrl:MachaTea,
        category: 'Tea',
        Title:'Matcha Tea Latte',
        Price:7.99,
        desc:'Smooth and creamy matcha sweetened just right and served with steamed milk. This favorite will transport your senses to pure green delight.'
    },
    {
        imgUrl:Americano,
        category: 'Coffee',
        Title:'Caffè Americano',
        Price:4.99,
        desc:'Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.'
    },
    {
        imgUrl:Darkrosted,
        category: 'Coffee',
        Title:'Featured Dark Roast Coffee',
        Price:4.99,
        desc:'This full-bodied dark roast coffee with bold, robust flavors showcases our roasting and blending artistry—an essential blend of balanced and lingering flavors.'
    },
    {
        imgUrl:Espresso,
        category: 'Coffee',
        Title:'Espresso',
        Price:7.99,
        desc:'Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.'
    },
    {
        imgUrl:Cappuccino,
        category: 'Coffee',
        Title:'Cappuccino',
        Price:5.99,
        desc:'Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.'
    },
    {
        imgUrl:Vanilla,
        category: 'Coffee',
        Title:'Blonde Vanilla Latte',
        Price:4.99,
        desc:'Extra-smooth Starbucks® Blonde Espresso, velvety steamed milk and vanilla syrup come together to create a delightful new twist on a beloved espresso classic. An ideal cup for those who prefer a lighter-roasted coffee.'
    },
    {
        imgUrl:FlatWhite,
        category: 'Coffee',
        Title:'Blonde Vanilla Latte',
        Price:6.99,
        desc:'Smooth ristretto shots of espresso get the perfect amount of steamed whole milk to create a not-too-strong, not-too-creamy, just-right flavor.'
    },
    {
        imgUrl:EspressoFrappuccino,
        category: 'Frappuccino',
        Title:'Espresso Frappuccino',
        Price:9.99,
        desc:'Coffee is combined with a shot of espresso and milk, then blended with ice to give you a nice little jolt and lots of sipping joy.'
    },
     {
        imgUrl:MachaFrappuccino,
        category: 'Frappuccino',
        Title:'Matcha Frappuccino',
        Price:9.99,
        desc:'This blend of sweetened premium matcha green tea, milk and ice—topped off with sweetened whipped cream—inspires a delicious boost and good green vibes.'
    },
     {
        imgUrl:MochaFrappuccino,
        category: 'Frappuccino',
        Title:'Mocha Frappuccino',
        Price:9.99,
        desc:'Mocha sauce, Frappuccino® Roast coffee, milk and ice all come together for a mocha flavor that will leave you wanting more. To change things up, try it affogato-style with a hot espresso shot poured right over the top.'
    },

]

export const location_data = [
    {
        id:0,
        title: "Paris",
        imgUrl: Paris,
        address:" NE Saint Capulla 23th"
    },
    {   
        id:1,
        title: "New York",
        imgUrl: NewYork,
        address:" 28th SW City Square 3rd Block"
    },
    {
        id:2,
        title: "Los Angeles",
        imgUrl: LA,
        address:"5th floor street SE Town Square Mall"
    },
]


export const AboutData = [
    {
        id:'0',
        title:'The day we start',
        text:'The Cafe 1932 is a charming coffee shop that has been serving the community since 1932. Located in the heart of the city, it has been a favorite among locals and tourists alike, providing a warm and cozy atmosphere for everyone who enters its doors. Over the years, Cafe 1932 has become known for its delicious coffee, baked goods, and sandwiches. The coffee is brewed with care, using only the finest beans, and is a perfect way to start your day or pick you up mid-afternoon.'
    },
    {
        id:'1',
        title:'Famous for',
        text:'The interior of the cafe is just as warm and inviting as the coffee. The walls are adorned with vintage posters and photographs, giving the place a nostalgic feel. There are comfortable booths and tables, each with its own unique character, and the baristas are always ready to make you feel at home. Whether you’re looking for a place to catch up with friends, work on your laptop, or just relax and enjoy a good book, Cafe 1932 is the perfect destination.'
    },
    {
        id:'2',
        title:'The Quality Times',
        text:'In addition to its coffee and atmosphere, Cafe 1932 is also famous for its live music events. Every Saturday night, local musicians take the stage, providing the soundtrack for a night of good food, drink, and conversation. From blues and jazz to folk and rock, there is always something for everyone, and the crowd is always lively and friendly. If you’re looking for a unique dining experience, Cafe 1932 is the place to be. So why not come and pay a visit to this historic cafe, and see why it’s been a staple of the city for over 90 years.'
    }
]


export default menu_Tea;