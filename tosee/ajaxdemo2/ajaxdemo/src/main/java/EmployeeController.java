public class EmployeeController{
	
	String message = null ;
	
	public EmployeeController(String message) {
		this.message = message;
	}

	
	  public EmployeeController() {
	  
	  }
	 
	public void tp() {
		String msg = message.toUpperCase();
		System.out.println(msg);
	}
	public static void main(String[] args) {
		EmployeeController ec = new EmployeeController();
		ec.tp();
	}
	
}