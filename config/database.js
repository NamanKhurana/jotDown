if(process.env.NODE_ENV === 'production')
{
    module.exports = {mongoURI: 'mongodb://Naman:Nk@vidjot-cluster-shard-00-00-6cbrv.mongodb.net:27017,vidjot-cluster-shard-00-01-6cbrv.mongodb.net:27017,vidjot-cluster-shard-00-02-6cbrv.mongodb.net:27017/test?ssl=true&replicaSet=VidJot-Cluster-shard-0&authSource=admin&retryWrites=true'}
}
else
{
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}