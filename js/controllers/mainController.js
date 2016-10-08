// MAIN CONTROLLER
function mainController($scope) {
    $scope.title = "Tableau AngularJS";
    $scope.students = [
      {
        "nom":"test",
        "prenom":"Paul",
        "email":"email@exemple.com"
      }
    ]


    $scope.add = function() {
        var data = {};
        data.nom = $scope.nom;
        data.prenom = $scope.prenom;
        data.email = $scope.email;

        $scope.students.push(data);

        $scope.nom = "";
        $scope.prenom ="";
        $scope.email ="";
    }
};
