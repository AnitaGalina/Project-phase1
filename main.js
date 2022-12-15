let coviddata;

(function onLoad()
{
    setButtonFunctions();

    getLatestCovid19Data();
    getLatestCovid19RecoveryData();
    getLatestCovid19VaccineSpecificData();
})();

function setButtonFunctions()
{
    document.getElementById('countries').onchange = function() {
        const selectedValue = document.getElementById('countries').value;
        const countryData = covid19data.filter(c => c.country == selectedValue)[0];

        
        const newConfirmed = document.getElementById('covidNewConfirmed');
        const totalConfirmed = document.getElementById('covidTotalConfirmed');
        const infectionRisk = document.getElementById('covidInfectionRisk');

        (countryData.cases.new) ? newConfirmed.innerHTML = 'New confirmed cases: ' + countryData.cases.new : newConfirmed.innerHTML = 'New confirmed cases: 0';
        (countryData.cases.total) ? totalConfirmed.innerHTML = 'Total confirmed cases: ' + countryData.cases.total : totalConfirmed.innerHTML = 'Total confirmed cases: 0';
        
        infectionRisk.innerHTML = 'Infection risk: ' + countryData.day;
    };
    document.getElementById('countries').onchange = function() {
        const selectedValue = document.getElementById('countries').value;
        const countryData = covid19data.filter(c => c.country == selectedValue)[0];

        
        const newRecovered = document.getElementById('covidNewRecoveries');
        const totalRecovered = document.getElementById('covidTotalRecovered');
        const recoveryPeriod = document.getElementById('covidRecoveryPeriod');
     
         

        (countryData.recoveries.new) ? newRecovered.innerHTML = 'New recoveries: ' + countryData.recoveries.new : newRecoveries.innerHTML = 'New recoveries: 0';
        (countryData.recovered.total) ? totalRecovered.innerHTML = 'Total recovered: ' + countryData.recovered.total : totalRecovered.innerHTML = 'Total recovered: 0';
        (countryData.deaths.new) ? recoveryPeriod.innerHTML = 'Recovery period: ' + countryData.recovery.period : recoveryPeriod.innerHTML = 'Recovery period: 0';
    };

    document.getElementById('buttongetRecoveryPeriod').onclick = getRecoveryPeriod;


    document.getElementById('countries').onchange = function() {
        const selectedValue = document.getElementById('countries').value;
        const countryData = covid19data.filter(c => c.country == selectedValue)[0];

        const vaccineEfficiency = document.getElementById('covidvaccineefficiency');
        const vaccineEfficiencyafterrecoveryfromcovid19 = document.getElementById(covidvaccineEfficiencyafterrecoveryfromcovid19)

        (countryData.vaccine.efficiency) ? vaccineEfficiency.innerHTML = 'Vaccine efficiency: ' + countryData.cases.new : vaccineEfficiency.innerHTML = 'Vaccine Efficiency: 0';
        (countryData.vaccineEfficiency.afterrecoveryfromcovid19) ?vaccineEfficiencyafterrecoveryfromcovid19.innerHTML = 'Vaccine efficiency after recovery from covid19 ' + countryData : vaccineEfficiencyafterrecoveryfromcovid19.innerHTML = 'Vaccine Efficiency after recovery from covid19: 0';
       
    




}


async function getLatestCovidData(){


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3676c55384mshd1f41ba5a14a1b5p1630ffjsn115789c654e5',
		'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
	}
};

fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


}

async function getLatestCovidRecoveryData(){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3676c55384mshd1f41ba5a14a1b5p1630ffjsn115789c654e5',
            'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
    };
    
    fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-everything', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}


async function getLatestCovid19VaccineSpecificData(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3676c55384mshd1f41ba5a14a1b5p1630ffjsn115789c654e5',
            'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
    };
    
    fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-vaccines/rna-based-vaccine/biontech-pfizer-fosun-pharma-rentschler-biopharma', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}