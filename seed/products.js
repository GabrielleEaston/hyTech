const db = require('../db')
const Product = require('../models/product')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const products = 
    [
        {
        "name": "How to get into the tech industry without a degree or experience",
          "author": "Sameer Kamat",
          "imgURL": "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "description": "Some bigger companies go only for candidates with a four-year degree. Others look at the technical skills of their candidates more than what degrees they have earned. In a Forbes article, “15 great jobs that don’t require a four-year degree,” a recruiter says that candidates’ code samplings and their fit with the work culture mattered most to his company. “Of the people we hired, I had no idea who had a degree or not. If we liked them and thought they were cool and they wrote good-quality code, that’s all that mattered. So, you could teach yourself some tech. Programmers need to learn new coding languages to keep up with technology changes. Once you’ve picked up enough, you could go to a small companies and ask for an apprentice-like role, stressing you are going to learn more on the job. They will probably appreciate your initiative and may give you a job. Teaching yourself using online courses, taking on small projects, and getting to work as an assistant to a freelancer can help you learn by yourself. Read the full blog at https://www.mbacrystalball.com/blog/2018/04/16/tech-industry-get-in/.",
        "sub_title": "Getting into tech with no degree"
        },
      
        {
          "name": "New to Coding? Which Programming Language Is Right for You?",
          "author": "Larry Kim",
          "imgURL": "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "description": "Top coders have near limitless prospects when it comes to employment, or even opportunities to succeed in their own startups. In fact, learning to code is fast becoming a necessary life skill, with millions each year taking online and in-person courses to learn Python, Java, and other popular programming languages.But which one will give you the most bang for your buck? Even if you’re learning how to code free online, it’s an investment of your time. You want to be sure you’re learning the language that will be most useful for you. Should You Learn Python, C, or Something Else Entirely? Of course, much of your decision about which coding language to start out on depends on what you want to be able to do or create with it. Learning Python makes sense if you want to develop video games or GUIs (graphic user interfaces) like Instagram. It’s one of the official programming languages at Google, and the average Python developer salary in the U.S. is $107,000. Sounds pretty good, right? But then, Ruby is a pretty awesome language too. Ruby is one of the easiest coding languages to learn, and there’s a massive, active community around it, with Ruby meetups in every major city around the world. On average, Ruby developers command salaries in the area of $102,000, with Amazon being one of the top employers.You might want to learn C if you plan on developing software, hardware, or even operating systems. C is a great language to start out on, because a lot of other languages have borrowed directly or indirectly from it, including Java and JavaScript, C++, Python, PHP, and Perl. Intel, Amazon, and Dell are all major employers for C programmers, who make an average of $102,000 a year. Read entire blog https://medium.com/the-mission/new-to-coding-which-programming-language-is-right-for-you-f506638aa36e.",
          "sub_title": "Learn Python, C, or Something Else Entirely?"
        },

        {
          "name": "How to Start Coding in Web Development",
          "author": "BitDegree",
          "imgURL": "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "description": "In the beginning, coding is going to be tough – you are essentially learning a new language to communicate ideas in! There is no easy way how to start programming for beginners. If you’re completely new to this sort of stuff, it will be nothing like anything you have done previously. Stick with it though. The longer you hang in there, the more likely you are to have a “eureka” moment and it will all start making sense.You should start by choosing the programming language that seems most fitting for you. It is advised to choose a language that is mostly user-friendly or is not that hard to begin with. An example of that would be HTML or CSS, which are mainly used for basic web applications. If you are looking at more serious programming languages to start with, Python could be the one for you. Read the full blog at https://www.bitdegree.org/tutorials/how-to-start-coding/.",
          "sub_title": "How to Start Coding – The Wider Concepts"
        },
        {
          "name": "10 high-paying tech jobs you can get without a college degree",
          "author": "Mary Ellen Slayter",
          "imgURL": "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "description": "It’s part of the highs and lows of looking at job ads: “Wow, look at that pay range—that’d be great! Oh, but they require a bachelor’s degree. Look, college isn’t for everyone. The good news is that employers know this, and there are in-demand industries and jobs—especially in the red-hot tech sector—where the right combination of experience, aptitude and willingness to learn on the job can make that degree requirement fade away.Using data from the U.S. Bureau of Labor Statistics and PayScale, Monster came up with the following list of 10 high-paying jobs that don’t necessarily require a four-year degree. Read the full article at https://www.monster.com/career-advice/article/high-paying-tech-jobs-no-degree-0217.",
          "sub_title": "No diploma? No problem in these hot fields"
        },
        {
          "name": "Six ways to break into the tech industry (with little or no experience)",
          "author": "WORKOPOLIS",
          "imgURL": "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "description": "How often have your scrolled through online job boards, only to find the majority of positions seem to have titles such as Network Administrator, Website Coordinator, or Digital Content Manager? For non-computer geeks like us, it can be frustrating to see so many available jobs that are seemingly out of reach. But wait! Maybe these kinds of positions aren’t so inaccessible. If you’ve been thinking of a career change, the tech sector is an exciting, fast-paced industry that is staffed by more than just computer aficionados. Positions come in all shapes and sizes. More and more, technical skills (which can be learned) are becoming secondary to those transferable skills (e.g. good communication, or leadership skills) which are considered essential in a candidate. In addition, while many companies have dedicated tech teams, other smaller firms incorporate a hybrid approach (i.e. employees take on many different roles). With some research, you’ll discover if this sector is right for you. Whether your interest lies in health and fitness, arts and education, the financial sector, or any other field, technology can be your entry point to almost any company or industry. Landing a job in a technical role will be tough, but gaining experience and finding the right opportunities are key. So, what have you got to lose? Read the full blog at https://careers.workopolis.com/advice/six-ways-to-break-into-the-tech-industry/.",
          "sub_title": "Here are six ways to break into the tech industry with little or no experience"
        }
        
        
      ]

    await Product.insertMany(products)
    console.log("Created products!")
}
const run = async () => {
    await main()
    db.close()
}

run()