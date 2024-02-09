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
      devShell.${system} = pkgs.mkShell {
        buildInputs = [
          pkgs.docker

          (flakey-devShell-pkgs.default.override { environments = [ "nix" "nextjs" ]; })
          (flakey-devShell-pkgs.vscodium.override {
            environments = [ "nix" "nextjs" ];
            extensions = with pkgs.vscode-extensions; [ prisma.prisma ];
          })
        ];
      };
    };
}
