//Base Url
const BASE_URL_ORDERS = "http://203.171.20.210:8080/devcamp-pizza365/orders";
const BASE_URL_DRINKS = "http://203.171.20.210:8080/devcamp-pizza365/drinks";
const BASE_URL_VOUCHERS = "http://203.171.20.210:8080/devcamp-pizza365/voucher_detail/";


//Fetch drinks
const FETCH_DRINKS_PENDING = "FETCH_DRINKS_PENDING";
const FETCH_DRINKS_SUCCESS = "FETCH_DRINKS_SUCCESS";
const FETCH_DRINKS_ERROR = "FETCH_DRINKS_ERROR";


//Select drink
const SELECT_DRINK = "SELECT_DRINK";


//Fetch vouchers
const FETCH_VOUCHER_PENDING = "FETCH_VOUCHER_PENDING";
const FETCH_VOUCHER_SUCCESS = "FETCH_VOUCHER_SUCCESS";
const FETCH_VOUCHER_ERROR = "FETCH_VOUCHER_ERROR";


//Create new order
const FETCH_ORDER_PENDING = "FETCH_ORDER_PENDING";
const FETCH_ORDER_SUCCESS = "FETCH_ORDER_SUCCESS";
const FETCH_ORDER_ERROR = "FETCH_ORDER_ERROR";



export {
    BASE_URL_ORDERS,
    BASE_URL_DRINKS,
    BASE_URL_VOUCHERS,
    FETCH_DRINKS_PENDING,
    FETCH_DRINKS_SUCCESS,
    FETCH_DRINKS_ERROR,
    SELECT_DRINK,
    FETCH_VOUCHER_PENDING,
    FETCH_VOUCHER_SUCCESS,
    FETCH_VOUCHER_ERROR,
    FETCH_ORDER_PENDING,
    FETCH_ORDER_SUCCESS,
    FETCH_ORDER_ERROR
};