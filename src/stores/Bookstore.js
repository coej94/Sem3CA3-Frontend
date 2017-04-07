import {observable, action} from "mobx";
import fetchHelper from "./fetchHelpers";
const URL = require("../../package.json").serverURL;


class Bookstore {
    @observable messageFromServer = "";
    @observable errorMessage = "";
    @observable books = [];



    @action
    setErrorMessage = (err) => {
        this.errorMessage = err;
    }

    @action
    getData = () => {
        this.errorMessage = "";
        this.messageFromServer = "";
        this.books = [];
        let errorCode = 200;
        const options = fetchHelper.makeOptions("GET", true);
        fetch(URL + "api/Book", options)
            .then((res) => {
                if (res.status > 210 || !res.ok) {
                    errorCode = res.status;
                }
                return res.json();
            })
            .then(action((res) => {  //Note the action wrapper to allow for useStrict
                if (errorCode !== 200) {
                    throw new Error(`${res.error.message} (${res.error.code})`);
                }
                else {
                    console.log("hej")
                    this.books.replace(res);
                }
            })).catch(err => {
            //This is the only way (I have found) to verify server is not running
            this.setErrorMessage(fetchHelper.addJustErrorMessage(err));
        })
    }
}

let bookstore = new Bookstore();

//Only for debugging
//window.userStore = userStore;
export default bookstore;

