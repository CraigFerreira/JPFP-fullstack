const db= require('./db');
const Campus= require('./Campuses');
const Students = require('./Students');
 

const campus= [
    { name: 'Hogwarts', imgURL: 'https://cdn.shopify.com/s/files/1/0751/4753/products/doyle24-timdoyle-hogwarts-detail.jpg?v=1542395878', numStudents: 0 },
    { name: 'Xavier School For Gifted Youngsters', imgURL: 'https://static.wikia.nocookie.net/xmenmovies/images/d/df/XMansionSale.jpg/revision/latest?cb=20200504084729', numStudents: 0},
    { name: 'South Park Elementary', imgURL: 'https://static.wikia.nocookie.net/southpark/images/1/15/Elementary-school-quarantine-cc.png/revision/latest?cb=20201007203912', numStudents: 0 }
];

const students= [
    { name: 'Harry Potter', imgURL: 'https://static.wikia.nocookie.net/d8e6d7d6-787f-4e8e-94f1-5aa1ae3f00e4' },
    { name: 'Hermione Granger', imgURL: 'https://cellularnews.com/wp-content/uploads/2020/05/20-harry-potter-hermione-granger-portrait-325x485.jpg'},
    { name: 'Ronald Weasley', imgURL: 'http://www.the-leaky-cauldron.org/wp-content/uploads/assets/Ronald-Weasley-Wallpaper-ronald-weasley-25505490-1024-768.jpg' },
    { name: 'Rogue', imgURL: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/anna-paquin-xmen-1536432612.jpg?crop=1xw:0.9xh;center,top&resize=480:*' },
    { name: 'Cyclops', imgURL: 'https://static.wikia.nocookie.net/marvelmoviesfanon/images/e/e4/500full.jpg/revision/latest/scale-to-width-down/340?cb=20140418135908'},
    { name: 'Phoenix', imgURL: 'https://hips.hearstapps.com/vidthumb/images/x-men-dark-phoenix-sophie-turner-1555511659.jpg?crop=0.418xw:1.00xh;0.406xw,0&resize=480:*' },
    { name: 'Butters Stotch', imgURL: 'https://upload.wikimedia.org/wikipedia/en/0/06/ButtersStotch.png' },
    { name: 'Eric Cartman', imgURL: 'https://lh3.googleusercontent.com/proxy/1dLCHgsUn36Z1pb1b6J_JRAjjYBiQCw52Zb2VlazewePAYep_0m2aI6zkXVFgfE9ns-2NPFDMtAXviAX_GUHpcUfO0peEhDv_lWNG41Azm3GfAGc4UpQ9yGSdmd4c4mQ_FfR7-Jp1Pd7gsxYeyEGAVE0x6qyTJn8DLN2xE3vW3E4qJjtpHFZBqva'},
    { name: 'Kenneth McCormick', imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCy2BKgacGowyseO2qwStXvnyo1RcJ_pOsw&usqp=CAU' },
];

Campus.hasMany(Students)
Students.belongsTo(Campus)

const syncAndSeed=async()=>{
    try{
       await db.authenticate()
       console.log('database connected')
       await Campus.sync({force: true})
       await Students.sync({force: true})

       const [Hogwarts, XavierSchoolForGiftedYoungsters, SpringfieldElementary] = await Promise.all(
        campus.map(({ name, imgURL, numStudents }) => 
        Campus.create({ name, imgURL, numStudents }))
    );

    const [HarryPotter, HermoineGranger, RonaldWeasley, Rogue, Cyclops, Phoenix, ButtersStotch, EricCartman, KennethMcCormick] = await Promise.all(
        students.map(({ name, imgURL}) => 
        Students.create({ name, imgURL}))
    );

    HarryPotter.CampusId= Hogwarts.id
    HermoineGranger.CampusId= Hogwarts.id
    RonaldWeasley.CampusId= Hogwarts.id
    Rogue.CampusId= XavierSchoolForGiftedYoungsters.id
    Cyclops.CampusId= XavierSchoolForGiftedYoungsters.id
    Phoenix.CampusId= XavierSchoolForGiftedYoungsters.id
    ButtersStotch.CampusId= SpringfieldElementary.id
    EricCartman.CampusId= SpringfieldElementary.id
    KennethMcCormick.CampusId=SpringfieldElementary.id

    await Promise.all([
        HarryPotter.save(), 
        HermoineGranger.save(),
        RonaldWeasley.save(),
        Rogue.save(),
        Cyclops.save(),
        Phoenix.save(),
        ButtersStotch.save(),
        EricCartman.save(),
        KennethMcCormick.save()

      ]) 

    }catch(err){
        console.log(err)
    }
}

// syncAndSeed()

module.exports= {
    syncAndSeed,
        Campus,
        Students,
        campus,
        students
}