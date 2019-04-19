if(process.env.NODE_ENV === 'production')
{
    module.exports = {mongoURI: 'mongodb+srv://Naman:Nk@vidjot-cluster-6cbrv.mongodb.net/test?retryWrites=true'}
}
else
{
    module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}