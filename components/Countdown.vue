<template>
    <div class="datetime">
        <div class="datein">
            <div class="text_date">
                <p class="text_date_p">{{ days }}</p>

            </div>
            <!-- <p class="">День</p> -->
        </div>
        <div class="time">
            <div class="block">
                <p class="digit">{{ hours | twodigits | colon }} </p>
                <!-- <p class="text">Hours</p> -->
            </div>
            <div class="block">
                <p class="digit">{{ minutes | twodigits | colon }} </p>
                <!-- <p class="text">Минут</p> -->
            </div>
            <div class="block">
                <p class="digit">{{ seconds | twodigits }}</p>
                <!-- <p class="text">Seconds</p> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {

    /* ready function will be here */
    ready() {
        window.setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000);
        },1000);
    },

    props : {
        date : {
            type: Number,
            coerce: str => Math.trunc(Date.parse(str) / 1000)
        }
    },

    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000)
        }
    },

    // var now = new Date();
    computed: {
        seconds() {
            return (this.now - this.date) % 60;
        },
        minutes() {
            return Math.trunc((this.now - this.date) / 60) % 60;
        },
        hours() {
            return Math.trunc((this.now - this.date) / 60 / 60) % 24;
        },
        days() {
            // return Math.trunc((this.date - this.now) / 60 / 60 / 24);
            // return Math.trunc((this.now - this.date) / 60 / 60 / 24);
            var options = {
              era: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              weekday: 'long',
              timezone: 'UTC',
            };
            var date = new Date();
            var date = date.toLocaleString("ru", options)
            
            // return Math.trunc((this.now - this.date) / 60 / 60 / 24);
            return date;
        }
    }
    /* Computed properties will be here */

}
</script>


<style>

@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);

.datetime{
    display: flex;
}

.datein{


}

.time{
    display: flex;
    margin-left: 20px;
}

.block {
    display: flex;
    flex-direction: column;
    margin: 5px;
}

.text {
    color: #1abc9c;
    font-size: 40px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 40;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
}

.text_date {
    color: #1abc9c;
    font-size: 20px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 40;
    display: flex;
    flex-direction: column;
    /*margin: 5px;*/
    padding: 10% 0;
    

}

.text_date_p{
    
    /*padding: 5% 0;*/
}

.digit {
    color: #ecf0f1;
    font-size: 40px;
    font-weight: 50;
    font-family: 'Roboto', serif;
    margin-left: 0px;
    /*text-align: center;*/
}

</style>