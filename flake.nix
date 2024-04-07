{
  inputs = {
    flakey-devShells.url = "https://flakehub.com/f/GetPsyched/not-so-flakey-devshells/0.x.x.tar.gz";
    flakey-devShells.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs = inputs@{ nixpkgs, flakey-devShells, ... }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
      flakey-devShell-pkgs = flakey-devShells.outputs.packages.${system};
    in
    {
      devShell.${system} = with pkgs; mkShell {
        buildInputs = [
          docker

          (flakey-devShell-pkgs.default.override { environments = [ "nix" "nextjs" ]; })
          (flakey-devShell-pkgs.vscodium.override {
            environments = [ "nix" "nextjs" ];
            extensions = vscode-utils.extensionsFromVscodeMarketplace [
              {
                name = "pretty-ts-errors";
                publisher = "yoavbls";
                version = "0.5.3";
                sha256 = "sha256-JSCyTzz10eoUNu76wNUuvPVVKq4KaVKobS1CAPqgXUA=";
              }
            ];
          })
        ];
      };
    };
}
