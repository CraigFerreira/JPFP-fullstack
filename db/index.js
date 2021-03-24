const db= require('./db');
const Campus= require('./Campuses');
const Students = require('./Students');
 

const campus= [
    { name: 'Hogwarts', imgURL: 'https://cdn.shopify.com/s/files/1/0751/4753/products/doyle24-timdoyle-hogwarts-detail.jpg?v=1542395878', numStudents: 0,
        address: `Hogwarts Castle, Highlands, Scotland, Great Britain`,
        description: `"The finest school of witchcraft and wizardry in the world."
        — Rubeus Hagrid's praising of Hogwarts
        Hogwarts School of Witchcraft and Wizardry was the British wizarding school, located in the Scottish Highlands. It accepted magical students from Great Britain and Ireland for enrolment. It was a state-owned school, funded by the Ministry of Magic.
        
        The precise location of the school could never be uncovered because it was rendered Unplottable. To Muggles, the school appeared to be an old, abandoned castle. Similarly, most wizarding schools' locations were protected in order to prevent their ways of teaching being revealed, as well as protect the students and schools themselves from any harm.
        
        Established around the 10th century, Hogwarts was considered to be one of the finest magical institutions in the Wizarding World, though other notable schools included Beauxbatons Academy of Magic in France, the Durmstrang Institute implied to be in northern Europe, and Ilvermorny School of Witchcraft and Wizardry in the United States. Children with magical abilities were enrolled at birth, and acceptance was confirmed by owl post at age eleven. However, if the child in question was a Muggle-born, a staff member from the school visited the child and his or her family in order to inform them of their magical heritage and the existence of the Wizarding world.
        
        The school's motto was Draco Dormiens Nunquam Titillandus (Draco Dormiens Nvnqvam Titillandvs), which, translated from Latin, means "Never tickle a sleeping dragon".`
    },
    { name: 'Xavier School For Gifted Youngsters', imgURL: 'http://2.bp.blogspot.com/-4dXfpVfu6uQ/TfTtWZoQwUI/AAAAAAAAALY/uh3nmrXEufU/s1600/HatleyCastle.jpg', numStudents: 0,
      address: '1407 Graymalkin Lane, Salem Center, Westchester County, New York',
      description: `"Xavier Institute" redirects here. For other uses, see List of schools named after Francis Xavier.

      The X-Mansion or Xavier Institute is the common name for a mansion and research institute appearing in American comic books published by Marvel Comics. The mansion is depicted as the private estate of Charles Francis Xavier, a character in X-Men comics. It serves as the base of operations and training site of the X-Men. It is also the location of an accredited private school for mutant children, teenagers, and sometimes older aged mutants, the Xavier Institute for Higher Learning, formerly the Xavier School for Gifted Youngsters. The X-Mansion is also the worldwide headquarters of the X-Corporation.
      The X-Mansion's address is 1407 Graymalkin Lane, Salem Center, located in Westchester County, New York. The school's motto is "mutatis mutandis." In a recent edition of the comic, Wolverine re-opened the school, at the same address, under the name of the Jean Grey School for Higher Learning. After it was discovered that the Terrigen Cloud had become toxic to mutants enough to have them die from M-Pox, Storm had the mansion moved to Limbo and renamed it X-Haven to keep mutants safe from the Terrigen until a cure could be discovered. After Medusa destroys the Terrigen Cloud so the mutants could survive, Kitty Pryde moves the mansion from Limbo to Central Park, New York, and renames it the Xavier Institute for Mutant Education and Outreach.
      `
    },
    { name: 'South Park Elementary', imgURL: 'https://www.dafont.com/forum/attach/orig/5/0/504586.jpg', numStudents: 0,
      address: 'South Park',
      description: `The school has undergone two major redesigns. The second of which resulted from the school being accidentally burnt down by the boys.

      New School
      In "Butt Out," the school was burnt down after Stan, Kyle, Cartman, and Kenny were smoking. They tried to hide their cigarettes from Mr. Mackey and threw them in the dumpster without putting them out. The dumpster then caught fire and burnt down the school. A new school was constructed, bearing many similarities to the old one. It is virtually identical to the old one, having the same classrooms and offices. The only differences are the cafeteria and exterior of the school, which are slightly altered.`
    }
];

const students= [
    { firstName: 'Harry', lastName: 'Potter', email:'hpotter@hogwarts.edu', imgURL: 'https://static.wikia.nocookie.net/d8e6d7d6-787f-4e8e-94f1-5aa1ae3f00e4' , gpa:'3.2'},
    { firstName: 'Hermione',lastName: 'Granger',email:'hgranger@hogwarts.edu', imgURL: 'https://cellularnews.com/wp-content/uploads/2020/05/20-harry-potter-hermione-granger-portrait-325x485.jpg', gpa:'4'},
    { firstName: 'Ronald', lastName: 'Weaseley',email:'rweaseley@hogwarts.edu',imgURL: 'http://www.the-leaky-cauldron.org/wp-content/uploads/assets/Ronald-Weasley-Wallpaper-ronald-weasley-25505490-1024-768.jpg' , gpa:'3'},
    { firstName: 'Anna', lastName: 'LeBeau (Alias: Rogue)',email:'rogue@xavier.edu',imgURL: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/anna-paquin-xmen-1536432612.jpg?crop=1xw:0.9xh;center,top&resize=480:*' , gpa:'3.2'},
    { firstName: 'Scott',lastName: 'Summers (Alias: Cyclops)',email:'cyclops@xavier.edu', imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Ep8MJyeRglTmK9NlMUSOecuRRCfbhhV2kQ&usqp=CAU', gpa:'3.2'},
    { firstName: 'Jean',lastName: 'Grey (Alias: Phoenix)',email:'phoenix@xavier.edu', imgURL: 'https://hips.hearstapps.com/vidthumb/images/x-men-dark-phoenix-sophie-turner-1555511659.jpg?crop=0.418xw:1.00xh;0.406xw,0&resize=480:*' , gpa:'4'},
    { firstName: 'Butters',lastName: 'Stotch',email:'bstotch@southpark.edu', imgURL: 'https://upload.wikimedia.org/wikipedia/en/0/06/ButtersStotch.png' , gpa:'2.8'},
    { firstName: 'Eric',lastName: 'Cartman',email:'ecartman@southpark.edu', imgURL: 'https://img1.looper.com/img/gallery/the-absolute-worst-thing-cartman-has-ever-done-on-south-park/intro-1567185798.jpg', gpa:'2.5'},
    { firstName: 'Kenneth',lastName: 'McCormick', email:'kmccormick@southpark.edu', imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCy2BKgacGowyseO2qwStXvnyo1RcJ_pOsw&usqp=CAU' , gpa:'3.2'},
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
        campus.map(({ name, imgURL, numStudents, address, description}) => 
        Campus.create({ name, imgURL, numStudents, address, description }))
    );

    const [HarryPotter, HermoineGranger, RonaldWeasley, Rogue, Cyclops, Phoenix, ButtersStotch, EricCartman, KennethMcCormick] = await Promise.all(
        students.map(({ firstName, lastName, email, imgURL, gpa}) => 
        Students.create({ firstName, lastName, email, imgURL, gpa}))
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