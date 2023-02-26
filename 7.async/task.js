class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if(!time || !callback) {
            throw new Error('отсутствуют обязательные аргументы');
        }
        const index = this.alarmCollection.findIndex(alarm => alarm.time === time);
        if (index !== -1) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({
            time,
            callback,
            canCall: true
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
      }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0,-3);
    }

    start() {
        if(this.intervalId !== null) return;
        const checkAlarms = () => {
            this.alarmCollection.forEach((alarm) => {
              if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                alarm.canCall = false;
                alarm.callback();
              }
            });
          };
      
          checkAlarms();
          this.intervalId = setInterval(checkAlarms, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    
      resetAllCalls() {
    
        this.alarmCollection.forEach(function(call) {
          call.canCall = true;
        });
      }
    
      clearAlarms() {
        this.stop();
        this.alarmCollection = [];
      }
}