const {substitution} = require("../src/substitution.js");
const expect = require("chai").expect;

describe('Substitution()', () => {

    it ('("thinkful", "xoyqmcgrukswaflnthdjpzibev") should be: "jrufscpw"', () => {
        let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        let expected = "jrufscpw"
        expect(actual).to.eql(expected)
    });

    it(`("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev") should be: "elp xhm xf mbymwwmfj dne"`,() => {
        let actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        let expected = "elp xhm xf mbymwwmfj dne"
        expect(actual).to.eql(expected)
    });

    it(`("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false) should be: "thinkful"`,() => {
        let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
        let expected = "thinkful"
        expect(actual).to.eql(expected)
    });

    it(`("message", "$wae&zrdxtfcygvuhbijnokmpl") should be: "y&ii$r&"`,() => {
        let actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
        let expected = "y&ii$r&"
        expect(actual).to.eql(expected)
    });

    it(`("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false) should be: "message"`,() => {
        let actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
        let expected = "message"
        expect(actual).to.eql(expected)
    });

    it(`("thinkful", "short") should be: "false"`,() => {
        let actual = substitution("thinkful", "short")
        let expected = false
        expect(actual).to.eql(expected)
    });

    it(`("thinkful", "abcabcabcabcabcabcabcabcyz") should be: "false"`,() => {
        let actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
        let expected = false
        expect(actual).to.eql(expected)
    });
})