class CharaStatus {
    constructor() {
        this.MAX_STATUS = 20;
        this.MIN_STATUS = 0;

        this.name = "ななし";
        this.growth_point = 50;
        this.level = 1;
        this.hp = 1;
        this.mp = 1;
        this.attack_point = 1;
        this.defense_point = 1;
        this.magic_attack_point = 1;
        this.magic_defense_point = 1;
        this.speed = 1;
    }

    isAbleIncrease(status_point) {
        return this.growth_point > 0 && this.MAX_STATUS > status_point;
    }
    isAbleDecrease(status_point) {
        return this.growth_point > 0 && this.MIN_STATUS > status_point;
    }

    setName(name) { this.name = name; }
    getName() { return this.name; }

    increaseHp() { if (this.isAbleIncrease(this.hp)) { this.hp++; } }
    decreaseHp() { if (this.isAbleDecrease(this.hp)) { this.hp--; } }

    increaseMp() { if (this.isAbleIncrease(this.mp)) { this.mp++; } }
    decreaseMp() { if (this.isAbleDecrease(this.mp)) { this.mp--; } }
}


var chara = new CharaStatus()
var app = new Vue({
    el: '#app',

    data: {
        chara: chara,
        name: chara.name,
        hp: chara.hp,
        mp: chara.mp,
        max: chara.MAX_STATUS,
        amount: 40
    },

    methods: {
        increaseHp: function (event) { this.chara.increaseHp() },
        decreaseHp: function (event) { this.chara.decreaseHp() },

        increaseMp: function (event) { this.chara.increaseMp() },
        decreaseMp: function (event) { this.chara.decreaseMp() },
    }
})
