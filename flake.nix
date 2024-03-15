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
          nodePackages.prisma
          openssl

          (flakey-devShell-pkgs.default.override { environments = [ "nix" "nextjs" ]; })
          (flakey-devShell-pkgs.vscodium.override {
            environments = [ "nix" "nextjs" ];
            extensions = with pkgs.vscode-extensions; [ prisma.prisma ];
          })
        ];
        env = {
          PRISMA_QUERY_ENGINE_LIBRARY = "${prisma-engines}/lib/libquery_engine.node";
          PRISMA_QUERY_ENGINE_BINARY = "${prisma-engines}/bin/query-engine";
          PRISMA_SCHEMA_ENGINE_BINARY = "${prisma-engines}/bin/schema-engine";
        };
      };
    };
}
