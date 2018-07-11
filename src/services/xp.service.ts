import { experience } from '../assets/cv';
class XPService {
    public getAll() {
        return experience;
    }

    public getByIndex(index: number) {
        if (experience.length > index) {
            return experience[index];
        }

        throw new Error(`Unable to find XP for index ${index}`);
    }
}
const service = new XPService();
export default service;
