var app = new Vue(
    {
        el: '#app',
        data: {
            Day: '',
            Month: '',
            Year: '',
            diffAnni: 0,
            diffMesi: 0,
            diffGiorni: 0

        },

        methods: {

            submitForm() {
                let giornoUtente = this.Day;
                let meseUtente = this.Month;
                let annoUtente = this.Year;

                const now = new Date(); // crea un oggetto Date con la data e l'ora correnti
                let giornoCorrente = now.getDate(); // restituisce il giorno del mese (1-31)
                console.log(giornoCorrente)
                let meseCorrente = now.getMonth() + 1; // restituisce il mese (0-11), quindi aggiungi 1 per ottenere il valore corretto (1-12)
                console.log(meseCorrente)
                let annoCorrente = now.getFullYear(); // restituisce l'anno 
                console.log(annoCorrente)

                // calcola l'età dell'utente
                this.diffAnni = annoCorrente - annoUtente;
                this.diffMesi = meseCorrente - meseUtente;
                this.diffGiorni = giornoCorrente - giornoUtente;

                // aggiusta la differenza dei mesi se necessario
                if (this.diffGiorni < 0) {
                    this.diffMesi--;
                    let ultimoGiornoMesePrecedente = new Date(annoCorrente, meseCorrente - 1, 0).getDate();
                    this.diffGiorni += ultimoGiornoMesePrecedente;
                }
                if (this.diffMesi < 0) {
                    this.diffAnni--;
                    this.diffMesi += 12;
                }

                console.log(`L'età dell'utente è ${this.diffAnni} anni, ${this.diffMesi} mesi e ${this.diffGiorni} giorni.`);


            },

        }
    }
);
