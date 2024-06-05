const { createApp } = Vue;

createApp({
    data() {
        return {
            emailsArray: []
        }
    },
    methods: {
        generateRandomEmail: function(numberOfEmails){
            let index = 0
            while(index < numberOfEmails){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    email = response.data.response;
                    this.emailsArray.push(email);
                });
                index++;
            }
        }
    },
    created(){
        this.generateRandomEmail(10);
    }
}).mount('#app');