var app = angular.module("Basica", []);

app.controller("EjemploController", EjemploController);

function EjemploController($scope){
	$scope.clientes = [
		{
			id: 1,
			nombre: "Juan",
			apellidos: "Pérez",
			dni: "53246758A"
		},
		{
			id: 2,
			nombre: "María",
			apellidos: "Rodriguez",
			dni: "57345965B"
		},
		{
			id: 3,
			nombre: "Pedro",
			apellidos: "López",
			dni: "53245678C"
		}];

		$scope.orden = "";
		$scope.buscar = "";
		$scope.estado = {visible: false};
		$scope.vista = "hidden";
		$scope.tamanioCampos = 12;
		$scope.tamanioBotonCampos = 0;
		$scope.isAdded = false;
		$scope.isModified = false;

	$scope.Aniadir = function(){
		$scope.clientes.push({
			nombre: $scope.nombre,
			apellidos: $scope.apellidos,
			dni: $scope.dni
		});

		$scope.mensaje = "Cliente añadido";
		$scope.isAdded = true;
		$scope.isModified = false;
	}

	$scope.EnviarForm = function(cliente){
		$scope.id = cliente.id;
		$scope.nombre = cliente.nombre;
		$scope.apellidos = cliente.apellidos;
		$scope.dni = cliente.dni;

		$scope.estado.visible = true;
		$scope.mensaje = "";
	}

	$scope.LimpiarForm = function(){
		$scope.id = "";
		$scope.nombre = "";
		$scope.apellidos = "";
		$scope.dni = "";
		$scope.mensaje = "";
	}

	$scope.LimpiarCampos = function(){
		$scope.orden = "";
		$scope.buscar = "";
		$scope.tamanioCampos = 12;
		$scope.tamanioBotonCampos = 0;
		$scope.vista = "hidden";
		$scope.mensaje = "";
	}

	$scope.Modificar = function(){
		angular.forEach($scope.clientes, function(cliente) {
			if(cliente.id == $scope.id){
				cliente.nombre = $scope.nombre;
				cliente.apellidos = $scope.apellidos;
				cliente.dni = $scope.dni;
			}
		});

		$scope.mensaje = "Cliente modificado";
		$scope.isAdded = false;
		$scope.isModified = true;
	}

	$scope.Eliminar = function(index){
		$scope.clientes.splice(index, 1);
		$scope.mensaje = "";
	}

	$scope.Destacar = function(fila){
		$scope.filaSeleccionada = fila;
		$scope.mensaje = "";
		$scope.isAdded = false;
		$scope.isModified = false;
	}

	$scope.$watch("orden", function(newValue, oldValue){
		if(newValue != oldValue){
			$scope.vista = "visible";
			$scope.tamanioCampos = 8;
			$scope.tamanioBotonCampos = 4;
			$scope.mensaje = "";
		}
	});

	$scope.$watch("buscar", function(newValue, oldValue){
		if(newValue != oldValue){
			$scope.vista = "visible";
			$scope.tamanioCampos = 8;
			$scope.tamanioBotonCampos = 4;
			$scope.mensaje = "";
		}
	});
}