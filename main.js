class CharaStatus {
    constructor() {
        this.MAX_STATUS = 20;
        this.MIN_STATUS = 0;

        this.name = "No Name";
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

    // progress の val値は 百分率のため
    calcRatio(status_point) {
        return parseInt(100 * status_point / this.MAX_STATUS);
    }

    isAbleIncrease(status_point) {
        return this.growth_point > 0 && this.MAX_STATUS > status_point;
    }
    isAbleDecrease(status_point) {
        return this.MIN_STATUS < status_point;
    }

    setName(name) { this.name = name; }
    getName() { return this.name; }

    // TODO メソッドの統一
    increaseHp() { if (this.isAbleIncrease(this.hp)) { this.hp++; this.growth_point--; } }
    decreaseHp() { if (this.isAbleDecrease(this.hp)) { this.hp--; this.growth_point++; } }

    increaseMp() { if (this.isAbleIncrease(this.mp)) { this.mp++; this.growth_point--; } }
    decreaseMp() { if (this.isAbleDecrease(this.mp)) { this.mp--; this.growth_point++; } }

    increaseAttack() { if (this.isAbleIncrease(this.attack_point)) { this.attack_point++; this.growth_point--; } }
    decreaseAttack() { if (this.isAbleDecrease(this.attack_point)) { this.attack_point--; this.growth_point++; } }

    increaseDefense() { if (this.isAbleIncrease(this.defense_point)) { this.defense_point++; this.growth_point--; } }
    decreaseDefense() { if (this.isAbleDecrease(this.defense_point)) { this.defense_point--; this.growth_point++; } }

    increaseMagicAttack() { if (this.isAbleIncrease(this.magic_attack_point)) { this.magic_attack_point++; this.growth_point--; } }
    decreaseMagicAttack() { if (this.isAbleDecrease(this.magic_attack_point)) { this.magic_attack_point--; this.growth_point++; } }

    increaseMagicDefense() { if (this.isAbleIncrease(this.magic_defense_point)) { this.magic_defense_point++; this.growth_point--; } }
    decreaseMagicDefense() { if (this.isAbleDecrease(this.magic_defense_point)) { this.magic_defense_point--; this.growth_point++; } }

    increaseSpeed() { if (this.isAbleIncrease(this.speed)) { this.speed++; this.growth_point--; } }
    decreaseSpeed() { if (this.isAbleDecrease(this.speed)) { this.speed--; this.growth_point++; } }
}


var chara = new CharaStatus()
var app = new Vue({
    el: '#app',

    data: {
        chara: chara,
        amount: 40
    },

    methods: {
        increaseHp: function (event) { this.chara.increaseHp() },
        decreaseHp: function (event) { this.chara.decreaseHp() },

        increaseMp: function (event) { this.chara.increaseMp() },
        decreaseMp: function (event) { this.chara.decreaseMp() },

        increaseAttack: function (event) { this.chara.increaseAttack() },
        decreaseAttack: function (event) { this.chara.decreaseAttack() },

        increaseDefense: function (event) { this.chara.increaseDefense() },
        decreaseDefense: function (event) { this.chara.decreaseDefense() },

        increaseMagicAttack: function (event) { this.chara.increaseMagicAttack() },
        decreaseMagicAttack: function (event) { this.chara.decreaseMagicAttack() },

        increaseMagicDefense: function (event) { this.chara.increaseMagicDefense() },
        decreaseMagicDefense: function (event) { this.chara.decreaseMagicDefense() },

        increaseSpeed: function (event) { this.chara.increaseSpeed() },
        decreaseSpeed: function (event) { this.chara.decreaseSpeed() },
    }
})
