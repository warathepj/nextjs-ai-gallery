// pages/actions/test.js
'use server';

async function EnvVariable() {
    'use server';

    return {
        theVariable: process.env.actionVariable || undefined,
        host: process.env.DB_HOST || undefined,
    };
}
console.log(theVariable)
export default EnvVariable;
// module.exports = EnvVariable;
