const users=[{id:1,name:'join'},{id:2,name:'susan'},{id:3,name:'anna'}];

const articles=[
    {userId:1,articles:['one','two','three']},
    {userId:2,articles:['four','five']},
    {userId:3,articles:['six','seven','eight','nine']}
]

function getUser(name){
    return new Promise((resolve,reject)=>{
        const user=users.find(u=>u.name===name)
        if(user){
            return resolve(user);
        }else{
            reject(`No such user with name:${name}`);
        }
    });
}

function getArticles(userId){
    return new Promise((resolve,reject)=>{
        const userArticles=articles.find(art=>art.userId===userId);
        if(userArticles){
            return resolve(userArticles.articles);
        }else{
            reject(`Wrong ID`);
        }
    });
}
// getUser("join")
//                 .then((user)=>getArticles(user.id).then(art=>console.log(art)))
//                 .catch(err=>console.log(err));


const getData=async()=>{
    try{
        const user=await getUser("anna");
        const articles=await getArticles(user.id);
        console.log(articles)
    }catch(err){
        console.log(err)
    }
}

getData();


















