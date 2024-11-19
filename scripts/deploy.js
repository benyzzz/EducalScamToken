async function main() {
    // Obtenir le contract factory
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    // Obtenir le solde de l'adresse de déploiement
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    // Déployer le contrat MDR
    const Token = await ethers.getContractFactory("MDR");
    const token = await Token.deploy("MonToken", "MTK");
  
    console.log("Token contract deployed to:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  