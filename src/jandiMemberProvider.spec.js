import JandiMebmerProvider from "./jandiMebmerProvider";
import {describe, expect, it} from "@jest/globals";

describe('JandiMemberProvider Test', () => {
    it('provide member', () => {
        const jdmProvider = new JandiMebmerProvider();
        expect(jdmProvider.provideMember()).toContain('1컴이');
    });
});
