{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    buildInputs = with pkgs.buildPackages; [ nodejs_21 yarn ];
}