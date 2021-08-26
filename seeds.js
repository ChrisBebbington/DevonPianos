const mongoose = require('mongoose');
const Piano = require('./models/pianos.js');

const dbUrl = 'mongodb+srv://Bebbs:Password123@yelpcampcluster.txt4o.mongodb.net/YelpCampCluster?retryWrites=true&w=majority';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
    () => {console.log("Mongoose Connected")},
    err => {console.log(err)}
    );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Database connected')
});

const seedDB = async () => {
    await Piano.deleteMany({}); 
    const piano1 = new Piano({
        make: 'Zender',
        model: '105',
        description: "A compact English built piano with the acclaimed German Schwanter action.  Ideal for all grades of pianist.",
        price: '£785',
        images: [
            'https://res.cloudinary.com/dvgdvtqug/image/upload/v1620934994/Devon%20Pianos/Zender2.jpg',
            'https://res.cloudinary.com/dvgdvtqug/image/upload/v1620935027/Devon%20Pianos/Zender1.jpg' 
        ]
    });
    await piano1.save();

    const piano2 = new Piano({
        make: 'Yamaha',
        model: 'G2',
        description: "The G2 grand is excellent for domestic or studio use.  This piano has an even tone and responsive action.  Built circa 1967.",
        price: '£5750',
        images: [
            'https://res.cloudinary.com/dvgdvtqug/image/upload/v1620935248/Devon%20Pianos/Yamaha3.jpg',
            'https://res.cloudinary.com/dvgdvtqug/image/upload/v1620935278/Devon%20Pianos/Yamaha1.jpg',
            'https://res.cloudinary.com/dvgdvtqug/image/upload/v1620935264/Devon%20Pianos/Yamaha2.jpg' 
        ]
    });
    await piano2.save();

    const piano3 = new Piano({
        make: 'Steinmayer',
        model: '110',
        description: "Built circa 2000 in the Pearl River factory, the piano has high quality German strings giving an even rich tone throughout.  Ideal for all grades of pianist.",
        price: '£1550',
        images: [
            'https://res.cloudinary.com/dvgdvtqug/image/upload/v1620935512/Devon%20Pianos/Steinmayer1.jpg',
            'https://res.cloudinary.com/dvgdvtqug/image/upload/v1620935527/Devon%20Pianos/Steinmayer2.jpg',
            'https://res.cloudinary.com/dvgdvtqug/image/upload/v1620935547/Devon%20Pianos/Steinmayer3.jpg' 
        ]
    });
    await piano3.save();

    const piano4 = new Piano({
        make: 'Steinhoven',
        model: '113',
        description: "A brand new piano, with practise pedal and soft fall keyboard lid.  Ideal for all grades of student.",
        price: '£2450',
        images: [
            'https://res.cloudinary.com/dvgdvtqug/image/upload/v1620935399/Devon%20Pianos/Steinhoven1.jpg',
            'https://res.cloudinary.com/dvgdvtqug/image/upload/v1620935411/Devon%20Pianos/Steinhoven2.jpg',
            'https://res.cloudinary.com/dvgdvtqug/image/upload/v1620935422/Devon%20Pianos/Steinhoven3.jpg' 
        ]
    });
    await piano4.save();

    const piano5 = new Piano({
        make: 'Waldstein',
        model: '118',
        description: "A lightly used piano with a responsive action and rich bass, the piano has a practice pedal for quiet play.  Ideal for all grades of pianist.",
        price: '£1450',
        images: [
            'https://res.cloudinary.com/dvgdvtqug/image/upload/v1620935137/Devon%20Pianos/Waldstein1.jpg',
            'https://res.cloudinary.com/dvgdvtqug/image/upload/v1620935151/Devon%20Pianos/Waldstein2.jpg'
        ]
    });
    await piano5.save();

    // const foundPianos = await Piano.find({});
    // console.log(foundPianos);
    // const piano2 = new Piano({
    //     make: ,
    //     model: ,
    //     description: ,
    //     price: ,
    // });
    // piano2.save();
    // const piano3 = new Piano({
    //     make: ,
    //     model: ,
    //     description: ,
    //     price: ,
    // });
    // piano3.save();
    // const piano4 = new Piano({
    //     make: ,
    //     model: ,
    //     description: ,
    //     price: ,
    // });
    // piano4.save();
    // const piano5 = new Piano({
    //     make: ,
    //     model: ,
    //     description: ,
    //     price: ,
    // });
    // piano5.save();
}

seedDB().then(() => {
    console.log('Seeded');
    mongoose.connection.close();
});