//Soul Selector

//var base = document.getElementById("base");
//var increased = document.getElementById("increased");
//var current = document.getElementById("current");

//Global Variables
var suffix = ["VIG", "END", "VIT", "ATN", "STR", "DEX", "ADP", "INT", "FTH"];
var souls = "0.500.528.557.587.619.653.689.727.767.810.854.901.948.997.1049.1104.1159.1217.1278.1341.1408.1479.1553.1631.1699.1770.1845.1922.2003.2087.2175.2266.2361.2460.2564.2671.2784.2900.3022.3149.3256.3367.3482.3600.3722.3849.3980.4115.4255.4400.4549.4704.4864.5029.5200.5300.5463.5600.5740.5883.6031.6181.6336.6494.6657.6823.6994.7168.7348.7531.7697.7866.8039.8216.8397.8582.8771.8964.9161.9362.9568.9779.9994.10214.10438.10668.10903.11143.11388.11638.11836.12037.12242.12450.12662.12887.13096.13319.13545.13775.14009.14248.14490.14736.14987.15241.15501.15764.16032.16305.16582.16864.17150.17442.18005.18275.18549.18827.19109.19396.19687.19982.20282.20586.20895.21208.21527.21849.22177.22510.22847.23190.23538.23891.24249.24613.24982.25357.25738.26124.26515.26913.27317.27727.28143.28565.28993.29428.29869.30317.30772.31234.31702.32178.32661.33150.33648.34152.34665.35185.35712.36248.36792.37344.37904.38472.39050.39635.40230.40713.41201.41696.42196.42702.43215.43733.44258.44789.45327.45689.46055.46423.46795.47169.47546.47927.48310.48697.49086.49479.49875.50274.50676.51081.51490.51902.52317.52736.53157.55018.56944.58937.60999.63134.65344.67631.69998.72448.74984.77608.80324.83136.86046.89057.92174.95400.98739.102195.105772.109474.113306.117271.121376.125624.130021.134572.139282.144156.149202.154424.159829.165423.171213.177205.183407.189826.196470.203347.210464.217830.225454.233345.241512.249965.258714.267769.277141.286841.296880.297622.298367.299112.299860.300610.301361.302115.302870.303627".split(".");


window.onload = function()
{
	addEventListeners();
}



var player = new characterClass();

function addEventListeners()
{
	//Global event listener - Character drop down menu
	document.getElementById("ddlCharacter").addEventListener("change",function(){ populateDefaultValues(document.getElementById("ddlCharacter").value); }, false);
	
	/*
	for (var i = 0; i < suffix.length; i++)
	{
		document.getElementById("add" + suffix[i]).addEventListener("click", function(){	addOne("increased" + suffix[i]);	}, false);
		document.getElementById("minus" + suffix[i]).addEventListener("click", function(){ minusOne("increased" + suffix[i]); }, false);
	}
	*/
	//Global event listeners - Buttons
	//VIGOR
	document.getElementById("addVIG").addEventListener("click", function(){	addOne("increasedVIG");	}, false);
	document.getElementById("minusVIG").addEventListener("click", function(){ minusOne("increasedVIG"); }, false);

	//ENDURANCE
	document.getElementById("addEND").addEventListener("click", function() { addOne("increasedEND"); }, false);
	document.getElementById("minusEND").addEventListener("click", function() { minusOne("increasedEND"); }, false);

	//VITALITY
	document.getElementById("addVIT").addEventListener("click", function() { addOne("increasedVIT"); }, false);
	document.getElementById("minusVIT").addEventListener("click", function() { minusOne("increasedVIT"); }, false);

	//ATTUNEMENT
	document.getElementById("addATN").addEventListener("click", function(){ addOne("increasedATN"); }, false);
	document.getElementById("minusATN").addEventListener("click", function(){ minusOne("increasedATN"); }, false);

	//STRENGTH
	document.getElementById("addSTR").addEventListener("click", function(){ addOne("increasedSTR"); }, false);
	document.getElementById("minusSTR").addEventListener("click", function(){ minusOne("increasedSTR"); }, false);

	//DEXTERITY
	document.getElementById("addDEX").addEventListener("click", function(){ addOne("increasedDEX"); }, false);
	document.getElementById("minusDEX").addEventListener("click", function(){ minusOne("increasedDEX"); }, false);

	//ADAPTABILITY
	document.getElementById("addADP").addEventListener("click", function(){ addOne("increasedADP"); }, false);
	document.getElementById("minusADP").addEventListener("click", function(){ minusOne("increasedADP"); }, false);

	//INTELLIGENCE
	document.getElementById("addINT").addEventListener("click", function(){ addOne("increasedINT"); }, false);
	document.getElementById("minusINT").addEventListener("click", function(){ minusOne("increasedINT"); }, false);

	//FAITH
	document.getElementById("addFTH").addEventListener("click", function(){ addOne("increasedFTH"); }, false);
	document.getElementById("minusFTH").addEventListener("click", function(){ minusOne("increasedFTH"); }, false);

}


//Base character object constructor
function characterClass() 
{
	this.SoulLevel = 0;
	this.Vigor = 0;
	this.Endurance = 0;
	this.Vitality = 0;
	this.Attunement = 0;
	this.Strength = 0;
	this.Dexterity = 0;
	this.Adaptability = 0;
	this.Intelligence = 0;
	this.Faith = 0;
}

function populateDefaultValues(value)
{
	//player = new characterClass();

	var baseVigor = document.getElementById("baseVIG");
	var baseEndurance = document.getElementById("baseEND");
	var baseVitality = document.getElementById("baseVIT");
	var baseAttunement = document.getElementById("baseATN");
	var baseStrength = document.getElementById("baseSTR");
	var baseDexterity = document.getElementById("baseDEX");
	var baseAdaptability = document.getElementById("baseADP");
	var baseIntelligence = document.getElementById("baseINT");
	var baseFaith = document.getElementById("baseFTH");
	var baseSum = document.getElementById("baseSUM");

	
	/*			LVL  VIG END VIT ATT STR DEX ADP INT FTH
	Warrior	 	12	 7	 6	 6	 5	 15	 11	 5	 5	 5
	Knight	 	13	 12	 6	 7	 4	 11	 8	 9	 3	 6
	Swordsman	12	 4	 8	 4	 6	 9	 16	 6	 7	 5
	Bandit	 	11	 9	 7	 11	 2	 9	 14	 3	 1	 8
	Cleric	 	14	 10	 3	 8	 10	 11	 5	 4	 4	 12
	Sorcerer	11	 5	 6	 5	 12	 3	 7	 8	 14	 4
	Explorer	10	 7	 6	 9	 7	 6	 6	 12	 5	 5
	Deprived	1	 6	 6	 6	 6	 6	 6	 6	 6	 6
	*/

	switch(value)
	{
		case "warrior":
			player.SoulLevel = 10;
			player.Vigor = 7;
			player.Endurance = 6;
			player.Vitality = 6;
			player.Attunement = 5;
			player.Strength = 15;
			player.Dexterity = 11;
			player.Adaptability = 5;
			player.Intelligence = 5;
			player.Faith = 5;
			break;

		case "knight":
			player.SoulLevel = 13;
			player.Vigor = 12;
			player.Endurance = 6;
			player.Vitality = 7;
			player.Attunement = 4;
			player.Strength = 11;
			player.Dexterity = 8;
			player.Adaptability = 9;
			player.Intelligence = 3;
			player.Faith = 6;
			break;

		case "swordsman":
			player.SoulLevel = 12;
			player.Vigor = 4;
			player.Endurance = 8;
			player.Vitality = 4;
			player.Attunement = 6;
			player.Strength = 9;
			player.Dexterity = 16;
			player.Adaptability = 6;
			player.Intelligence = 7;
			player.Faith = 5;
			break;

		case "bandit":
			player.SoulLevel = 11;
			player.Vigor = 9;
			player.Endurance = 7;
			player.Vitality = 11;
			player.Attunement = 2;
			player.Strength = 9;
			player.Dexterity = 14;
			player.Adaptability = 3;
			player.Intelligence = 1;
			player.Faith = 8;
			break;

		case "cleric":
			player.SoulLevel = 14;
			player.Vigor = 10;
			player.Endurance = 3;
			player.Vitality = 8;
			player.Attunement = 10;
			player.Strength = 11;
			player.Dexterity = 5;
			player.Adaptability = 4;
			player.Intelligence = 4;
			player.Faith = 12;
			break;

		case "sorcerer":
			player.SoulLevel = 11;
			player.Vigor = 5;
			player.Endurance = 6;
			player.Vitality = 5;
			player.Attunement = 12;
			player.Strength = 3;
			player.Dexterity = 7;
			player.Adaptability = 8;
			player.Intelligence = 14;
			player.Faith = 4;
			break;

		case "explorer":
			player.SoulLevel = 10;
			player.Vigor = 7;
			player.Endurance = 6;
			player.Vitality = 9;
			player.Attunement = 7;
			player.Strength = 6;
			player.Dexterity = 6;
			player.Adaptability = 12;
			player.Intelligence = 5;
			player.Faith = 5;
			break;

		case "deprived":
			player.SoulLevel = 1;
			player.Vigor = 6;
			player.Endurance = 6;
			player.Vitality = 6;
			player.Attunement = 6;
			player.Strength = 6;
			player.Dexterity = 6;
			player.Adaptability = 6;
			player.Intelligence = 6;
			player.Faith = 6;
			break;
	}

	baseVigor.innerText = player.Vigor;
	baseEndurance.innerText = player.Endurance;
	baseVitality.innerText = player.Vitality;
	baseAttunement.innerText = player.Attunement;
	baseStrength.innerText = player.Strength;
	baseDexterity.innerText = player.Dexterity;
	baseAdaptability.innerText = player.Adaptability;
	baseIntelligence.innerText = player.Intelligence;
	baseFaith.innerText = player.Faith;
	baseSum.innerText = player.Vigor + 
						player.Endurance + 
						player.Vitality + 
						player.Attunement + 
						player.Strength + 
						player.Dexterity + 
						player.Adaptability + 
						player.Intelligence + 
						player.Faith;
	document.getElementById("soulLevel").innerText = player.SoulLevel;

	//Clears all 'increased' values
	var elements = document.getElementsByClassName("increased");
	for (var i = 0; i < elements.length; i++)
	{
		elements[i].innerText = 0;
	}

	updateAll();
}

function addOne(id)
{
	console.log(id);
	id = document.getElementById(id);
	id.innerText = parseInt(id.innerText) + 1;
	player.SoulLevel++;
	updateAll();
}

function minusOne(id)
{
	//console.log(id);
	id = document.getElementById(id);
	if (parseInt(id.innerText) != 0)
	{
		id.innerText = parseInt(id.innerText) - 1;
		player.SoulLevel--;
		updateAll();
	}
}

function updateAll()
{
	
	var baseVigor = parseInt(document.getElementById("baseVIG").innerText);
	var baseEndurance = parseInt(document.getElementById("baseEND").innerText);
	var baseVitality = parseInt(document.getElementById("baseVIT").innerText);
	var baseAttunement = parseInt(document.getElementById("baseATN").innerText);
	var baseStrength = parseInt(document.getElementById("baseSTR").innerText);
	var baseDexterity = parseInt(document.getElementById("baseDEX").innerText);
	var baseAdaptability = parseInt(document.getElementById("baseADP").innerText);
	var baseIntelligence = parseInt(document.getElementById("baseINT").innerText);
	var baseFaith = parseInt(document.getElementById("baseFTH").innerText);

	var increasedVigor = parseInt(document.getElementById("increasedVIG").innerText);
	var increasedEndurance = parseInt(document.getElementById("increasedEND").innerText);
	var increasedVitality = parseInt(document.getElementById("increasedVIT").innerText);
	var increasedAttunement = parseInt(document.getElementById("increasedATN").innerText);
	var increasedStrength = parseInt(document.getElementById("increasedSTR").innerText);
	var increasedDexterity = parseInt(document.getElementById("increasedDEX").innerText);
	var increasedAdaptability = parseInt(document.getElementById("increasedADP").innerText);
	var increasedIntelligence = parseInt(document.getElementById("increasedINT").innerText);
	var increasedFaith = parseInt(document.getElementById("increasedFTH").innerText);
	document.getElementById("increasedSUM").innerText = increasedVigor + 
														increasedEndurance + 
														increasedVitality + 
														increasedAttunement + 
														increasedStrength + 
														increasedDexterity + 
														increasedAdaptability +
														increasedIntelligence +
														increasedFaith;

	document.getElementById("currentVIG").innerText = baseVigor + increasedVigor;
	document.getElementById("currentEND").innerText = baseEndurance + increasedEndurance;
	document.getElementById("currentVIT").innerText = baseVitality + increasedVitality;
	document.getElementById("currentATN").innerText = baseAttunement + increasedAttunement;
	document.getElementById("currentSTR").innerText = baseStrength + increasedStrength;
	document.getElementById("currentDEX").innerText = baseDexterity + increasedDexterity;
	document.getElementById("currentADP").innerText = baseAdaptability + increasedAdaptability;
	document.getElementById("currentINT").innerText = baseIntelligence + increasedIntelligence;
	document.getElementById("currentFTH").innerText = baseFaith + increasedFaith;
	document.getElementById("currentSUM").innerText = baseVigor + increasedVigor + 
													baseEndurance + increasedEndurance + 
													baseVitality + increasedVitality + 
													baseAttunement + increasedAttunement + 
													baseStrength + increasedStrength + 
													baseDexterity + increasedDexterity + 
													baseAdaptability + increasedAdaptability +
													baseIntelligence + increasedIntelligence +
													baseFaith + increasedFaith;

	document.getElementById("soulLevel").innerText = player.SoulLevel;

	var cost = 0;
	for(var i = 0; i < player.SoulLevel; i++)
	{
		cost += parseInt(souls[i]);
	}

	document.getElementById("soulCost").innerText = cost;
}

